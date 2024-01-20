import { createSlice } from '@reduxjs/toolkit';
import data from '@/data/index';
import { createNewComment } from '@/utils/createNewComment';
import {
  ICommentData,
  ICommentDataBase,
} from '@/interfaces/IComments';
import { findCommentById } from '@/utils/findCommentById';

const { comments }: ICommentData = data;

export const slice = createSlice({
  name: 'comments',
  initialState: comments,
  reducers: {
    addNewComment(state, { payload }) {
      const newComment = createNewComment({
        content: payload.content,
      });
      state.push(newComment);
    },
    editComment(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state })
      
      foundedComment.isEditing = !foundedComment?.isEditing;
    },
    updateComment(state, { payload: { id, content } }) {
      const foundedComment = findCommentById({ id, state });

      foundedComment.isEditing = false;
      foundedComment.content = content;
    },
    deleteComment(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state });
      foundedComment.isDeleting = true;
    },
    confirmDeleteComment(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state });

      foundedComment.isDeleting = true;

      return state.filter((comment) => comment.id !== id);
    },
    cancelDeleteComment(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state });
      foundedComment.isDeleting = false;
    },
    replyComment(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state });
      foundedComment.isReplying =
        !foundedComment.isReplying;
    },
    addReply(state, { payload: { id, content } }) {
      const foundedComment = findCommentById({ id, state });
      const replies = foundedComment.replies as ICommentDataBase[];
      const newReply = createNewComment({
        content,
        replyingTo: foundedComment.user.username,
      });

      foundedComment.isReplying = false;
      replies.push(newReply);
    },
    addVote(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state });

      if (foundedComment.hasAlreadyVoted) return;

      foundedComment.hasAlreadyVoted = true;
      foundedComment.score++;
    },
    removeVote(state, { payload: { id } }) {
      const foundedComment = findCommentById({ id, state });

      if (!foundedComment.hasAlreadyVoted) return;

      foundedComment.score--;
      foundedComment.hasAlreadyVoted = false;
    },
  },
});

export const reducer = slice.reducer;
export const {
  addNewComment,
  editComment,
  updateComment,
  deleteComment,
  confirmDeleteComment,
  cancelDeleteComment,
  addVote,
  removeVote,
  replyComment,
  addReply,
} = slice.actions;

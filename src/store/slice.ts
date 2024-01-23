import { createSlice } from '@reduxjs/toolkit';
import data from '@/data/index';
import { createNewComment } from '@/utils/createNewComment';
import {
  ICommentData,
  ICommentDataBase,
} from '@/interfaces/ICommentsData';
import {
  ICommentActionContentPayload,
  ICommentActionIdPayload,
} from '@/interfaces/IActions';
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
    updateComment(
      state,
      {
        payload: { id, content },
      }: ICommentActionContentPayload
    ) {
      const foundedComment = findCommentById({ id, state });
      foundedComment.content = content;
    },
    deleteComment(
      state,
      { payload: { id } }: ICommentActionIdPayload
    ) {
      return state.filter((comment) => comment.id !== id);
    },
    replyComment(
      state,
      {
        payload: { id, content },
      }: ICommentActionContentPayload
    ) {
      const foundedComment = findCommentById({ id, state });
      const replies =
        foundedComment.replies as ICommentDataBase[];

      const newReply = createNewComment({
        content,
        replyingTo: foundedComment.user.username,
      });

      // foundedComment.isReplying = false;
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
  updateComment,
  deleteComment,
  addVote,
  removeVote,
  replyComment,
} = slice.actions;

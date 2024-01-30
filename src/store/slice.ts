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
import { findComment } from '@/utils/findComment';
import { findReply } from '@/utils/findReply';
import { handleVotes } from '@/utils/handleVotes';

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
        payload: { id, content, parentId },
      }: ICommentActionContentPayload
    ) {
      const foundedComment = parentId
        ? findReply<ICommentDataBase>({
            id,
            parentId: parentId,
            state,
          })
        : findComment<ICommentDataBase>({
            id,
            state,
          });

      foundedComment.content = content;
    },
    deleteComment(
      state,
      { payload: { id, parentId } }: ICommentActionIdPayload
    ) {
      const commentIndex = findComment<number>({
        id: parentId || id,
        state,
        method: 'findIndex',
      });

      if (parentId) {
        const replyIndex = findReply<number>({
          id,
          parentId,
          state,
          method: 'findIndex',
        });

        state[commentIndex].replies?.splice(replyIndex, 1);
      } else {
        state.splice(commentIndex, 1);
      }
    },
    replyComment(
      state,
      {
        payload: { id, content, parentId },
      }: ICommentActionContentPayload
    ) {
      const foundedComment = findComment<ICommentDataBase>({
        id: parentId || id,
        state,
      });

      const replies =
        foundedComment.replies as ICommentDataBase[];

      const newReply = createNewComment({
        content,
        replyingTo: foundedComment.user.username,
      });

      replies.push(newReply);
    },
    //TODO: Implementar reducers abaixo a nível de replies
    addVote(state, { payload: { id, parentId } }) {
      handleVotes({
        id, 
        parentId,
        state
      })
    },
    removeVote(state, { payload: { id, parentId } }) {
      handleVotes({
        id,
        parentId,
        state,
        action: 'REMOVE'
      })
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

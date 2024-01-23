import { ICommentDataBase } from '@/interfaces/ICommentsData';
import { IFindCommentByID } from '@/interfaces/IFindCommentById';

export function findCommentById({
  id,
  state,
}: IFindCommentByID) {
  const foundedComment = state.find(
    (comment: ICommentDataBase) => comment.id === id
  );

  if (!foundedComment) {
    throw new Error(`Comment with ID ${id} not founded.`);
  }

  return foundedComment;
}

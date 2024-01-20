import { ICommentDataBase } from "@/interfaces/IComments";
import { IFindComentByID } from "@/interfaces/IFindCommentById";

export function findCommentById({ id, state }: IFindComentByID) {
  const foundedComment = state.find(
    (comment: ICommentDataBase) => comment.id === id
  );

  if (!foundedComment) {
    throw new Error(`Comment with ID ${id} not founded.`);
  };

  return foundedComment;
}
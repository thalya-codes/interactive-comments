export default interface IDeleteCommentInfos {
  id: number;
  isReply: boolean;
  deleteCommentFunc: (id: number, isReply: boolean) => void
}
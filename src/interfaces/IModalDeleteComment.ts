import IDeleteCommentInfos from './IDeleteCommentInfos';

export default interface IProps {
  handleClose: () => void;
  show: boolean;
  deleteCommentInfos: IDeleteCommentInfos; 
}
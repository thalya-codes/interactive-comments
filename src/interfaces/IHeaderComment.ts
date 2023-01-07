import IDeleteCommentInfos from './IDeleteCommentInfos';
import IUserInfo from "./IUserInfo";

export default interface IProps extends IUserInfo {
    id: string;
    createdAt: string;
    isTheAuthor: boolean;
    deleteCommentInfos: IDeleteCommentInfos
}
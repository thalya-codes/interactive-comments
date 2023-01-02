import IDeleteCommentInfos from './IDeleteCommentInfos';
import IUserInfo from "./IUserInfo";

export default interface IHeaderComment extends IUserInfo {
    id: string;
    createdAt: string;
    isTheAuthor: boolean;
    deleteCommentInfos: IDeleteCommentInfos
}
import IUserInfo from "./IUserInfo";

export default interface IHeaderComment extends IUserInfo {
    id: string;
    createdAt: string;
    isTheAuthor: boolean;
}
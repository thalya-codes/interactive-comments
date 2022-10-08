import IUserInfo from "./IUserInfo";

export default interface IHeaderComment extends IUserInfo {
    createdAt: string;
    children: React.ReactNode;
}
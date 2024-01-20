import { ICommentDataBase } from "./IComments";

export interface IFindCommentByID  {
    id: string;
    state: ICommentDataBase[];
}
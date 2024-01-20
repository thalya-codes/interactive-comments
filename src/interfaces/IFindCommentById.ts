import { ICommentDataBase } from "./IComments";

export interface IFindComentByID {
    id: string;
    state: ICommentDataBase[];
}
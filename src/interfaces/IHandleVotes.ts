import { ICommentDataBase } from "./ICommentsData";

export interface IHandleVotes {
    id: string;
    parentId?: string;
    state: ICommentDataBase[];
    action?: 'ADD' | 'REMOVE';
}
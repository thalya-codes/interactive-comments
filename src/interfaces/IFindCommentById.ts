import { ICommentDataBase } from './ICommentsData';

export interface IFindCommentByID {
  id: string;
  state: ICommentDataBase[];
}

import { ICommentDataBase } from './ICommentsData';

export interface IFindComment {
  id: string;
  state: ICommentDataBase[];
  method?: 'find' | 'findIndex';
}

import { IFindComment } from './IFindComment';

export interface IFindReply extends IFindComment {
  parentId: string;
}

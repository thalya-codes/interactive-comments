import { IHeader } from './IHeader';
import { IVoteControls } from './IVoteControls';

export interface ICommentContainer
  extends IVoteControls,
    Omit<IHeader, 'isAuthor' | 'children'> {
  content: string;
  parentId?: string;
}

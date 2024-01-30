import { RefObject } from 'react';
import { IHeader } from './IHeader';
import { IVoteControls } from './IVoteControls';

export interface ICommentContainer
  extends IVoteControls,
    Omit<IHeader, 'isAuthor' | 'children'> {
  content: string;
  commentListRef: RefObject<HTMLUListElement>;
  parentId?: string;
}

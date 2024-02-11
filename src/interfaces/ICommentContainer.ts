import { IHeader } from './IHeader';
import { IVoteControls } from './IVoteControls';

export interface ICommentContainer
  extends IVoteControls,
    Omit<IHeader, 'isAuthor' | 'children'> {
  content: string;
  parentId?: string;
  replyingTo?: string;
}

export interface IReplyingMode {
  fieldValue: string;
  isReplying: boolean;
}

export interface IEditingMode {
  fieldValue: string;
  isEditing: boolean;
}
import { IHeader } from '@/interfaces/IHeader';
import { IVoteControls } from '@/interfaces/IVoteControls';
import { SetStateAction, Dispatch, ReactNode } from 'react';
import {
  IEditingMode,
  IReplyingMode,
} from './ICommentContainer';

export interface IComment
  extends Omit<IHeader, 'children'>,
    IVoteControls {
  children: ReactNode;
  setReplyingMode: Dispatch<
    SetStateAction<IReplyingMode>
  >;
  setEditingMode: Dispatch<SetStateAction<IEditingMode>>;
  onShowModal: () => void;
}

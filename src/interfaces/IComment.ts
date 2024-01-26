import { IHeader } from '@/interfaces/IHeader';
import { IVoteControls } from '@/interfaces/IVoteControls';
import { SetStateAction, Dispatch, ReactNode } from 'react';

export interface IComment
  extends Omit<IHeader, 'children'>,
    IVoteControls {
  children: ReactNode;
  setIsReplyingMode?: Dispatch<SetStateAction<boolean>>;
  setIsEditingMode?: Dispatch<SetStateAction<boolean>>;
  onShowModal?: () => void;
}

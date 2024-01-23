import { IHeader } from '@/interfaces/IHeader';
import { IVoteControls } from '@/interfaces/IVoteControls';
import { SetStateAction, Dispatch } from 'react';

export interface IComment
  extends Omit<IHeader, 'children'>,
    IVoteControls {
  content: string;
  setIsReplyingMode?: Dispatch<SetStateAction<boolean>>;
  setIsEditingMode?: Dispatch<SetStateAction<boolean>>;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
}

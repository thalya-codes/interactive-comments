import { IHeader } from '@/interfaces/IHeader';
import { IVoteControls } from '@/interfaces/IVoteControls';

export interface IComment
  extends Omit<IHeader, 'children'>,
    IVoteControls {
  content: string;
}

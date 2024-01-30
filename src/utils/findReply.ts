import { ICommentDataBase } from '@/interfaces/ICommentsData';
import { findComment } from '@/utils/findComment';
import { IFindReply } from '@/interfaces/IFindReply';

export function findReply<T>({
  id,
  state,
  parentId,
  method = 'find',
}: IFindReply): T {
  const parent = findComment<ICommentDataBase>({
    id: parentId,
    state,
  });
  const foundedReply = parent.replies?.[method](
    (reply: ICommentDataBase) => reply.id === id
  ) as T;

  if (foundedReply === undefined || foundedReply === -1) {
    throw new Error(`Reply with ID ${id} not founded.`);
  }

  return foundedReply;
}

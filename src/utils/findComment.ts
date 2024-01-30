import { ICommentDataBase } from '@/interfaces/ICommentsData';
import { IFindComment } from '@/interfaces/IFindComment';

export function findComment<T>({
  id,
  state,
  method = 'find',
}: IFindComment): T {
  const founded = state?.[method](
    (comment: ICommentDataBase) => comment.id === id
  ) as T;

  if (founded === undefined || founded === -1) {
    throw new Error(`Comment with ID ${id} not founded.`);
  }

  return founded;
}

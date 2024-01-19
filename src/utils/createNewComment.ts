import { ICommentDataBase, ICreateNewComment } from '@/interfaces/IComments';
import { v4 as uuid } from 'uuid';

export function createNewComment({
  content,
  replyingTo,
}: ICreateNewComment): ICommentDataBase {
  return {
    id: uuid(),
    content,
    createdAt: new Date().toString(),
    score: 0,
    replyingTo,
    hasAlreadyVoted: false,
    user: {
      image: {
        png: '../assets/avatars/juliusomo.png',
        webp: '../assets/avatars/juliusomo.webp',
      },
      username: 'juliusomo',
    },
    replies: [],
    isDeleting: false,
    isEditing: false,
  };
}

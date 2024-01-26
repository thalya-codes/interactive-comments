import {
  ICommentDataBase,
  ICreateNewComment,
} from '@/interfaces/ICommentsData';
import { v4 as uuid } from 'uuid';

export function createNewComment({
  content,
  replyingTo,
}: ICreateNewComment): ICommentDataBase {
  return {
    id: uuid(),
    content,
    createdAt: new Date().toISOString(),
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
  };
}

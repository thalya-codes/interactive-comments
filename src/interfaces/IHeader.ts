import { ReactNode } from 'react';

export interface IHeader {
  usermame: string;
  avatar: string;
  createdAt: string;
  isAuthor?: boolean;
  children: ReactNode;
}

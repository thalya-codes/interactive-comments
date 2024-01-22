import { ReactNode } from 'react';

export interface IHeader {
  username: string;
  avatar: string;
  createdAt: string;
  isAuthor?: boolean;
  children?: ReactNode;
}

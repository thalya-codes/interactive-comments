import { ICommentList } from '@/interfaces/ICommentList';

export function CommentList({
  children,
  className = '',
}: ICommentList) {
  return (
    <ul className={`flex flex-col gap-10  ${className}`}>
      {children}
    </ul>
  );
}

import { ICommentList } from '@/interfaces/ICommentList';

export function CommentList({
  children,
  className = '',
}: ICommentList) {
  return (
    <ul
      className={`flex flex-col gap-10 w-8/12 md:w-[600px] ${className}`}
    >
      {children}
    </ul>
  );
}

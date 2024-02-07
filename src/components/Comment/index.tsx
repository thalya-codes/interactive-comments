import { Header } from '@components/Header';
import { VoteControls } from '@components/VoteControls';
import { IComment } from '@/interfaces/IComment';
import { CommentRightButtons } from '../CommentRightButtons';

export function Comment({
  id,
  username,
  avatar,
  score,
  createdAt,
  children,
  isAuthor = false,
  parentId,
  setIsReplyingMode,
  setIsEditingMode,
  onShowModal,
}: IComment) {
  const handleReplyingMode = (): void => {
    if (!setIsReplyingMode) return;
    setIsReplyingMode((state) => !state);
  };

  const handleEditingMode = (): void => {
    if (!setIsEditingMode) return;
    setIsEditingMode(true);
  };

  return (
    <div className='mx-3 bg-white rounded-md shadow-md p-5 flex gap-3 w-full sm:flex-col sm:justify-between sm:gap-4'>
      <VoteControls
        id={id}
        parentId={parentId}
        score={score}
        className='sm:hidden'
      />

      <div className='flex flex-col self-center gap-3 w-full'>
        <Header
          username={username}
          createdAt={createdAt}
          avatar={avatar}
          isAuthor={isAuthor}
        >
          <CommentRightButtons
            isAuthor={isAuthor}
            className={'sm:hidden self-start'}
            onShowModal={onShowModal}
            handleEditingMode={handleEditingMode}
            handleReplyingMode={handleReplyingMode}
          />
        </Header>

        {children}
      </div>

      <div className='hidden sm:flex sm:justify-between sm:gap-4'>
        <VoteControls
          id={id}
          parentId={parentId}
          score={score}
        />

        <CommentRightButtons
          className='self-center'
          isAuthor={isAuthor}
          onShowModal={onShowModal}
          handleEditingMode={handleEditingMode}
          handleReplyingMode={handleReplyingMode}
        />
      </div>
    </div>
  );
}

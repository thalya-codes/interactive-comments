import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { VoteControls } from '@components/VoteControls';
import { IComment } from '@/interfaces/IComment';

export function Comment({
  id,
  username,
  avatar,
  score,
  createdAt,
  children,
  isAuthor,
  setIsReplyingMode,
  setIsEditingMode,
  setShowModal,
}: IComment) {
  const handleReplyingMode = (): void => {
    if (!setIsReplyingMode) return;
    setIsReplyingMode((state) => !state);
  };

  const handleShowModal = (): void => {
    if (!setShowModal) return;
    setShowModal(true);
  };

  const handleEditingMode = (): void => {
    if (!setIsEditingMode) return;
    setIsEditingMode(true);
  };

  return (
    <div className='flex gap-3 w-6/12'>
      <VoteControls id={id} score={score} />

      <div className='flex flex-col self-center gap-3 w-full'>
        <Header
          username={username}
          createdAt={createdAt}
          avatar={avatar}
          isAuthor={isAuthor}
        >
          {isAuthor ? (
            <div className='flex gap-2 self-start'>
              <Button
                variants='soft-red'
                onClick={handleShowModal}
              >
                Delete
              </Button>

              <Button
                variants='moderate-blue'
                onClick={handleEditingMode}
              >
                Edit
              </Button>
            </div>
          ) : (
            <Button
              variants='moderate-blue'
              className='self-start'
              onClick={handleReplyingMode}
            >
              Reply
            </Button>
          )}
        </Header>

        {children}
      </div>
    </div>
  );
}

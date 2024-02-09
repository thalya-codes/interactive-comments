import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from '@/components/Comment';
import { Textarea } from '@components/Textarea';
import { Button } from '@components/Button';
import { CurrentUserField } from '@components/CurrentUserField';
import { ICommentContainer } from '@/interfaces/ICommentContainer';
import { replyComment, updateComment } from '@/store/slice';
import { useModal } from '@/hooks/useModal';
import { DeleteConfirmationModal } from '@components/DeleteConfirmationModal';

export function CommentContainer({
  id,
  parentId,
  content,
  createdAt,
  score,
  avatar,
  username,
  replyingTo,
  className = '',
}: ICommentContainer) {
  const dispatch = useDispatch();
  const [isEditingMode, setIsEditingMode] = useState(false);
  const { showModal, onShowModal, onHideModal } =
    useModal();
  const [isReplyingMode, setIsReplyingMode] =
    useState(false);
  const [editingCommentValue, setEditingCommentValue] =
    useState(content);
  const [replyingCommentValue, setReplyingCommentValue] =
    useState(`@${username}, `);

  const handleEditComment = (): void => {
    dispatch(
      updateComment({
        id,
        content: editingCommentValue,
        parentId,
      })
    );

    setIsEditingMode(false);
  };

  const handleReplyComment = (): void => {
    dispatch(
      replyComment({
        id,
        parentId,
        content: replyingCommentValue,
      })
    );
    setIsReplyingMode(false);
  };

  return (
    <div
      className={`flex flex-col w-full items-center ${className}`}
    >
      <Comment
        avatar={avatar}
        createdAt={createdAt}
        username={username}
        score={score}
        id={id}
        parentId={parentId}
        isAuthor={username === 'juliusomo'}
        setIsEditingMode={setIsEditingMode}
        setIsReplyingMode={setIsReplyingMode}
        onShowModal={onShowModal}
      >
        {isEditingMode ? (
          <div className='flex flex-col gap-5 w-full'>
            <Textarea
              value={editingCommentValue}
              setValue={setEditingCommentValue}
              className='w-full'
            />
            <Button
              variants='filled-moderate-blue'
              onClick={handleEditComment}
              className='self-end'
            >
              Update
            </Button>
          </div>
        ) : (
          <p className='text-neutral-grayish-blue text-sm'>
            {replyingTo && (
              <span className='font-medium text-primary-moderate-blue'>
                @{replyingTo}
              </span>
            )}{' '}
            {content}
          </p>
        )}
      </Comment>

      {isReplyingMode && (
        <CurrentUserField
          value={replyingCommentValue}
          setValue={setReplyingCommentValue}
          buttonText='Reply'
          onClick={handleReplyComment}
        />
      )}

      {showModal && (
        <DeleteConfirmationModal
          id={id}
          parentId={parentId}
          onHideModal={onHideModal}
        />
      )}
    </div>
  );
}

import { SetStateAction, Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from '@/components/Comment';
import { Textarea } from '@components/Textarea';
import { Button } from '@components/Button';
import { CurrentUserField } from '@components/CurrentUserField';
import {
  ICommentContainer,
  IEditingMode,
  IReplyingMode,
} from '@/interfaces/ICommentContainer';
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
  const { showModal, onShowModal, onHideModal } =
    useModal();
  const [replyingMode, setReplyingMode] =
    useState<IReplyingMode>({
      isReplying: false,
      fieldValue: `@${username}, `,
    });
  const [editingMode, setEditingMode] =
    useState<IEditingMode>({
      isEditing: false,
      fieldValue: content,
    });

  const updateTextareaValue = <T,>(
    fieldValue: string,
    setState: Dispatch<SetStateAction<T>>
  ): void => {
    setState((state) => ({ ...state, fieldValue }));
  };

  const handleUpdateComment = (): void => {
    dispatch(
      updateComment({
        id,
        content: editingMode.fieldValue,
        parentId,
      })
    );

    setEditingMode((state) => ({
      ...state,
      isEditing: false,
    }));
  };

  const handleReplyComment = (): void => {
    dispatch(
      replyComment({
        id,
        parentId,
        content: replyingMode.fieldValue,
        replyingTo: username,
      })
    );

    setReplyingMode((state) => ({
      ...state,
      fieldValue: `@${username}, `,
      isReplying: false,
    }));
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
        setEditingMode={setEditingMode}
        setReplyingMode={setReplyingMode}
        onShowModal={onShowModal}
      >
        {editingMode.isEditing ? (
          <div className='flex flex-col gap-5 w-full'>
            <Textarea
              value={editingMode.fieldValue}
              onChange={(value: string) => {
                updateTextareaValue(value, setEditingMode);
              }}
              className='w-full'
            />
            <Button
              variants='filled-moderate-blue'
              onClick={handleUpdateComment}
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

      {replyingMode.isReplying && (
        <CurrentUserField
          value={`${replyingMode.fieldValue}`}
          onChange={(fieldValue: string) => {
            updateTextareaValue(
              fieldValue,
              setReplyingMode
            );
          }}
          buttonText='Reply'
          onClick={handleReplyComment}
        />
      )}

      <DeleteConfirmationModal
        id={id}
        parentId={parentId}
        showModal={showModal}
        onHideModal={onHideModal}
      />
    </div>
  );
}

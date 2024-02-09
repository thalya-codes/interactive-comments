import { useSelector } from 'react-redux';
import { ICommentDataBase } from '@/interfaces/ICommentsData';
import { CommentContainer } from '@/components/CommentContainer';
import { CommentList } from './CommentList';
import { CurrentUserField } from './CurrentUserField';
import { useDispatch } from 'react-redux';
import { addNewComment } from '@/store/slice';
import { useState } from 'react';

function App() {
  const [newCommentValue, setNewCommentValue] =
    useState('');

  const comments = useSelector(
    (selector) => selector.comments
  );
  const dispatch = useDispatch();

  const handleSendComment = (): void => {
    dispatch(addNewComment({ content: newCommentValue }));
    setNewCommentValue('');
  };

  return (
    <main className='flex flex-col items-center w-full my-8'>
      <CommentList className='w-[600px] sm:w-[85%] xs:w-[95%]'>
        {comments.map(
          ({
            content,
            createdAt,
            score,
            user: { image, username },
            replies,
            ...comment
          }: ICommentDataBase) => (
            <li key={comment.id}>
              <CommentContainer
                id={comment.id}
                username={username}
                content={content}
                score={score}
                avatar={image.png}
                createdAt={createdAt}
                className={
                  replies && replies?.length > 0
                    ? ' mb-10'
                    : ''
                }
              />
              {replies && (
                <CommentList className='ml-9 pl-8 sm:pl-5 xs:ml-4 border-l-2 border-spacing-7 border-neutral-300'>
                  {replies.map(
                    ({
                      id,
                      content,
                      createdAt,
                      score,
                      replyingTo,
                      user: { image, username },
                    }) => (
                      <li
                        key={id}
                        className='flex flex-col gap-6'
                      >
                        <CommentContainer
                          id={id}
                          parentId={comment.id}
                          username={username}
                          content={content}
                          score={score}
                          avatar={image.png}
                          createdAt={createdAt}
                          replyingTo={replyingTo}
                        />
                      </li>
                    )
                  )}
                </CommentList>
              )}
            </li>
          )
        )}
      </CommentList>

      <CurrentUserField
        value={newCommentValue}
        setValue={setNewCommentValue}
        buttonText='Send'
        className='w-[600px] sm:w-[85%] xs:w-[95%]'
        placeholder='Add a new comment...'
        onClick={handleSendComment}
      />
    </main>
  );
}

export default App;

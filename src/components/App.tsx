import { useSelector } from 'react-redux';
import { ICommentDataBase } from '@/interfaces/ICommentsData';
import { CommentContainer } from '@/components/CommentContainer';
import { CommentList } from './CommentList';

function App() {
  const comments = useSelector(
    (selector) => selector.comments
  );

  return (
    <main className='flex justify-center w-full my-8'>
      <CommentList className='w-[600px] sm:w-[85%]'>
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
                <CommentList className='ml-9 pl-8 sm:pl-5 border-l-2 border-spacing-7 border-neutral-300'>
                  {replies.map(
                    ({
                      id,
                      content,
                      createdAt,
                      score,
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
    </main>
  );
}

export default App;

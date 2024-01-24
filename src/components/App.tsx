import { useSelector } from 'react-redux';
import { ICommentDataBase } from '@/interfaces/ICommentsData';
import { CommentContainer } from '@/components/CommentContainer';

function App() {
  const comments = useSelector(
    (selector) => selector.comments
  );

  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <ul className='flex flex-col gap-12 py-10'>
        {comments.map(
          ({
            id,
            content,
            createdAt,
            score,
            user: { image, username },
            replies,
          }: ICommentDataBase) => (
            <li key={id}>
              <CommentContainer
                id={id}
                username={username}
                content={content}
                score={score}
                avatar={image.png}
                createdAt={createdAt}
                className={
                  replies && replies?.length > 0
                    ? ' mb-14'
                    : ''
                }
              />
              {replies && (
                <ul className='ml-14 flex flex-col gap-14'>
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
                          username={username}
                          content={content}
                          score={score}
                          avatar={image.png}
                          createdAt={createdAt}
                        />
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;

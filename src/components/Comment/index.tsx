import { useDispatch } from 'react-redux';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { VoteControls } from '@components/VoteControls';
import { IComment } from '@/interfaces/IComment';
import {
  deleteComment,
  editComment,
  replyComment,
} from '@/store/slice';

export function Comment({
  id,
  username,
  avatar,
  score,
  createdAt,
  content,
  isAuthor,
}: IComment) {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center gap-3 w-6/12'>
      <VoteControls
        id={id}
        score={score}
      />

      <div className='flex flex-col self-center gap-3'>
        <Header
          username={username}
          createdAt={createdAt}
          avatar={avatar}
          isAuthor={isAuthor}
        />

        <p className='text-neutral-grayish-blue text-sm'>
          {content}
        </p>
      </div>

      {isAuthor ? (
        <div className='flex gap-2 self-start'>
          <Button
            variants='soft-red'
            onClick={() => dispatch(deleteComment({ id }))}
          >
            Delete
          </Button>

          <Button
            variants='moderate-blue'
            onClick={() => dispatch(editComment({ id }))}
          >
            Edit
          </Button>
        </div>
      ) : (
        <Button
          variants='moderate-blue'
          className='self-start'
          onClick={() => dispatch(replyComment({ id }))}
        >
          Reply
        </Button>
      )}
    </div>
  );
}

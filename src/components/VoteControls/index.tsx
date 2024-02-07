import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { addVote, removeVote } from '@/store/slice';
import { IVoteControls } from '@/interfaces/IVoteControls';

export function VoteControls({
  id,
  parentId,
  score,
  className = '',
}: IVoteControls) {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col justify-center items-center w-10 h-20 px-2 box-border bg-primary-extra-light-grayish-blue shadow-md rounded-md font-medium sm:flex-row sm:w-24 sm:h-10 sm:gap-5 ${className}`}
    >
      <Button
        variants='light-grayish-blue'
        className='hover:text-primary-moderate-blue sm:text-lg'
        onClick={() => dispatch(addVote({ id, parentId }))}
        aria-label='Add vote'
      >
        +
      </Button>

      <span className='text-primary-moderate-blue'>
        {score}
      </span>

      <Button
        variants='light-grayish-blue'
        className='hover:text-primary-moderate-blue sm:text-lg'
        onClick={() =>
          dispatch(removeVote({ id, parentId }))
        }
        aria-label='Remove vote'
      >
        -
      </Button>
    </div>
  );
}

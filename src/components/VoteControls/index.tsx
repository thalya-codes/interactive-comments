import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { addVote, removeVote } from '@/store/slice';
import { IVoteControls } from '@/interfaces/IVoteControls';

export function VoteControls({ id, score }: IVoteControls) {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center w-12 p-2 bg-primary-extra-light-grayish-blue shadow-md rounded-md font-medium'>
      <Button
        variants='light-grayish-blue'
        className='hover:text-primary-moderate-blue'
        onClick={() => dispatch(addVote({ id }))}
        aria-label='Add vote'
      >
        +
      </Button>

      <span className='text-primary-moderate-blue'>
        {score}
      </span>

      <Button
        variants='light-grayish-blue'
        className='hover:text-primary-moderate-blue'
        onClick={() => dispatch(removeVote({ id }))}
        aria-label='Remove vote'
      >
        -
      </Button>
    </div>
  );
}

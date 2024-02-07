import { ICurrentUserField } from '@/interfaces/ICurrentUserField';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Textarea } from './Textarea';
import data from '@/data/index';

export function CurrentUserField({
  value,
  setValue,
  buttonText,
  onClick,
}: ICurrentUserField) {
  const {
    currentUser: { username, image },
  } = data;

  return (
    <div className='flex gap-5 w-full mt-14 bg-white rounded-md shadow-md p-5 sm:flex-col'>
      <Avatar
        src={image.png}
        alt={`Avatar ${username}`}
        size='md'
        className='sm:hidden'
      />

      <Textarea
        value={value}
        setValue={setValue}
        className='flex-1'
      />

      <div className='sm:flex sm:justify-between sm:items-center'>
        <Avatar
          src={image.png}
          alt={`Avatar ${username}`}
          size='md'
          className='hidden sm:block'
        />

        <Button
          variants='filled-moderate-blue'
          onClick={onClick}
          className='self-baseline'
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

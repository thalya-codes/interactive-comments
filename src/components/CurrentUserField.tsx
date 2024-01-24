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
    <div className='flex gap-5 w-6/12 mt-14'>
      <Avatar src={image.png} alt={`Avatar ${username}`} />
      
      <Textarea
        value={value}
        setValue={setValue}
        className='flex-1'
      />

      <Button
        variants='filled-moderate-blue'
        onClick={onClick}
        className='self-baseline'
      >
        {buttonText}
      </Button>
    </div>
  );
}

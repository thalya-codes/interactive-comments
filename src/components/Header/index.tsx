import { useTimeElapsed } from '@/hooks/useTimeElapsed';
import { Avatar } from '@/components/Avatar';
import { IHeader } from '@/interfaces/IHeader';

export function Header({
  username,
  avatar,
  createdAt,
  isAuthor = false,
  children,
}: IHeader) {
  const timeElapsed = useTimeElapsed({
    createdDate: createdAt,
  });

  return (
    <div className='flex justify-between'>
      <div className='flex gap-3 items-center text-sm'>
        <Avatar src={avatar} alt={`Avatar ${username}`} />

        <p className='font-medium text-neutral-dark-blue '>
          {username}
        </p>

        {isAuthor && (
          <span className='rounded-sm py-[0.5px] px-1 bg-primary-moderate-blue text-neutral-white'>
            you
          </span>
        )}

        <span className='text-neutral-grayish-blue'>
          {timeElapsed}
        </span>
      </div>

      {children}
    </div>
  );
}

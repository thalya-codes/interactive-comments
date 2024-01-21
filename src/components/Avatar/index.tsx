import { IAvatar } from '@/interfaces/IAvatar';

export function Avatar({
  src,
  alt,
  size = 'sm',
  className = '',
}: IAvatar) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${size === 'sm' ? 'w-[28px] h-[28px]' : 'w-[34px] h-[34px]'} ${className}`}
    />
  );
}

import { IButtonProps } from '@/interfaces/IButton';
import { ButtonVariants } from './ButtonVariants';

export function Button({
  variants = 'moderate-blue',
  className = '',
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      className={`hover:opacity-75 ${ButtonVariants[variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variants:
    | 'soft-red'
    | 'moderate-blue'
    | 'light-grayish-blue'
    | 'filled-soft-red'
    | 'filled-grayish-blue'
    | 'filled-moderate-blue';
    className?: string;
}

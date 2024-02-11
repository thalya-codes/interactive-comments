import { TextareaHTMLAttributes } from 'react';

export interface ITextarea
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange'
  > {
  value: string;
  onChange: (value: string) => void;
}

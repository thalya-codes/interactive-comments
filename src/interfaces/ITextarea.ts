import {
  Dispatch,
  SetStateAction,
  TextareaHTMLAttributes,
} from 'react';

export interface ITextarea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

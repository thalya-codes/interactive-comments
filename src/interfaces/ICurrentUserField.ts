import { Dispatch, SetStateAction } from 'react';

export interface ICurrentUserField {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  buttonText: string;
  className?: string;
  placeholder?: string;
  onClick: () => void;
}

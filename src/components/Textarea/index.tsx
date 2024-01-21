import { ITextarea } from '@/interfaces/ITextarea';
import { ChangeEvent } from 'react';

export function Textarea({
  cols = 45,
  rows = 4,
  value,
  setValue,
  ...props
}: ITextarea) {
  return (
    <textarea
      className='text-sm text-neutral-grayish-blue p-2 rounded-md border border-slate-200 focus:border-primary-moderate-blue bg-neutral-very-light-gray shadow-sm outline-none transition-all'
      cols={cols}
      rows={rows}
      value={value}
      onChange={({
        target: { value }
      }: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(value)
      }
      {...props}
    />
  );
}

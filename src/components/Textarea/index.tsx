import { ITextarea } from '@/interfaces/ITextarea';
import { ChangeEvent } from 'react';

export function Textarea({
  cols = 45,
  rows = 4,
  value,
  onChange,
  className = '',
  ...props
}: ITextarea) {
  return (
    <textarea
      className={`text-sm text-neutral-grayish-blue p-3 rounded-md border border-slate-200 focus:border-primary-moderate-blue  shadow-sm outline-none transition-all resize-none xs:h-36 ${className}`}
      cols={cols}
      rows={rows}
      value={value}
      onChange={({
        target: { value },
      }: ChangeEvent<HTMLTextAreaElement>) =>
        onChange(value)
      }
      {...props}
    />
  );
}

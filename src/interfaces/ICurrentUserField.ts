export interface ICurrentUserField {
  value: string;
  onChange: (value: string) => void;
  buttonText: string;
  className?: string;
  placeholder?: string;
  onClick: () => void;
}

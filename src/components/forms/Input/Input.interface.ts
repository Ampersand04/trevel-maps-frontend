export interface InputProps {
  label?: string;
  type?: 'text' | 'email' | '' | 'tel';
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

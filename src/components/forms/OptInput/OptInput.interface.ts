interface OtpInputProps {
  length: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  onComplete?: (value: string) => void;
}

export interface ICodeStep<TField extends string> {
  currentStep: string;
  targetLabel: string;
  inputValue: string;
  inputLength?: number;
  isSubmitting: boolean;
  errors: { inputError?: string };
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  onInputChange: (field: TField, value: string) => void;
  onVerify: () => void;
  onResend: () => void;
}

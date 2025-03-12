import { EmailAuthState } from '../hooks/useEmailAuth';

export interface EmailAuthFormProps {
  step: EmailAuthState['step'];
  email: string;
  code: string;
  errors: EmailAuthState['errors'];
  isSubmitting: boolean;
  setStep: (step: 'email' | 'code') => void;
  handleInputChange: (field: 'email' | 'code', value: string) => void;
  sendEmail: () => void;
  reSendEmail: () => void;
  verifyEmailCode: () => void;
}

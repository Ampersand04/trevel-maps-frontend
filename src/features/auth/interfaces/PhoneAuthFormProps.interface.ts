interface PhoneAuthFormProps {
  step: 'phone' | 'code';
  phoneNumber: string;
  code: string;
  isSubmitting: boolean;
  errors: { phoneNumber?: string; code?: string };
  setStep: (step: 'phone' | 'code') => void;
  handleInputChange: (field: 'phoneNumber' | 'code', value: string) => void;
  sendPhoneNumber: () => boolean;
  reSendPhoneNumber: () => boolean;
  verifyPhoneCode: () => Promise<boolean>;
}

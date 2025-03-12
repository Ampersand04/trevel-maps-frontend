import { useState } from 'react';
import { validateEmail, validateEmailCode } from '../helpers/validator';

export interface EmailAuthState {
  step: 'email' | 'code';
  email: string;
  code: string;
  errors: { email?: string; code?: string };
  isSubmitting: boolean;
}

export const useEmailAuth = () => {
  const [state, setState] = useState<EmailAuthState>({
    step: 'email',
    email: '',
    code: '',
    errors: {},
    isSubmitting: false,
  });

  const setStep = (step: 'email' | 'code') => {
    setState((prevState) => ({ ...prevState, step }));
  };

  const handleInputChange = async (field: 'email' | 'code', value: string) => {
    const error =
      field === 'email'
        ? validateEmail(value)
        : field === 'code' && value.length === 6 && (await verifyEmailCode());

    setState((prevState) => ({
      ...prevState,
      [field]: value,
      errors: { ...prevState.errors, [field]: error },
    }));
  };

  const sendEmail = () => {
    const emailError = validateEmail(state.email);
    if (emailError) {
      setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, email: emailError },
      }));
      return false;
    }

    setState((prevState) => ({
      ...prevState,
      isSubmitting: true,
    }));

    setTimeout(() => {
      console.log(
        'Проверка кода для email:',
        state.email,
        'с кодом:',
        state.code
      );
      setState((prevState) => ({
        ...prevState,
        step: 'code',
        isSubmitting: false,
      }));
    }, 2000);
    return true;
  };

  const reSendEmail = () => {
    const currentEmail = state.email;
    console.log('Отправка кода на имейл:', currentEmail);
    setStep('code');
    return true;
  };

  const verifyEmailCode = async () => {
    const codeError = validateEmailCode(state.code);
    if (codeError) {
      setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, code: codeError },
      }));
    }

    setState((prevState) => ({
      ...prevState,
      isSubmitting: true,
    }));

    setTimeout(() => {
      console.log(
        'Проверка кода для email:',
        state.email,
        'с кодом:',
        state.code
      );
      setState((prevState) => ({
        ...prevState,
        isSubmitting: false,
      }));
    }, 2000);

    return true;
  };

  return {
    step: state.step,
    email: state.email,
    code: state.code,
    errors: state.errors,
    isSubmitting: state.isSubmitting,
    setStep,
    handleInputChange,
    sendEmail,
    reSendEmail,
    setState,
    verifyEmailCode,
  };
};

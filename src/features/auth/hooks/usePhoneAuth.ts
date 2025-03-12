import { useState } from 'react';
import { validatePhone, validatePhoneCode } from '../helpers/validator';

interface PhoneAuthState {
  step: 'phone' | 'code';
  phoneNumber: string;
  code: string;
  errors: { phoneNumber?: string; code?: string };
  isSubmitting: boolean;
}

export const usePhoneAuth = () => {
  const [state, setState] = useState<PhoneAuthState>({
    step: 'phone',
    phoneNumber: '',
    code: '',
    errors: {},
    isSubmitting: false,
  });

  const setStep = (step: 'phone' | 'code') => {
    setState((prevState) => ({ ...prevState, step }));
  };

  const handleInputChange = async (
    field: 'phoneNumber' | 'code',
    value: string
  ) => {
    const error =
      field === 'phoneNumber'
        ? validatePhone(value)
        : field === 'code' && value.length === 4 && (await verifyPhoneCode());
    setState((prevState) => ({
      ...prevState,
      [field]: value,
      errors: { ...prevState.errors, [field]: error },
    }));
  };

  const sendPhoneNumber = () => {
    const phoneError = validatePhone(state.phoneNumber);
    if (phoneError) {
      setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, phoneNumber: phoneError },
      }));
      return false;
    }

    setState((prevState) => ({
      ...prevState,
      isSubmitting: true,
    }));

    setTimeout(() => {
      console.log(
        'Проверка кода по номеру телефона:',
        state.phoneNumber,
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

  const reSendPhoneNumber = () => {
    const currentPhoneNumber = state.phoneNumber;
    console.log('Отправка кода на номер:', currentPhoneNumber);
    setStep('code');
    return true;
  };
  const verifyPhoneCode = async () => {
    const codeError = validatePhoneCode(state.code);
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
        'Проверка кода по номеру телефона:',
        state.phoneNumber,
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
    phoneNumber: state.phoneNumber,
    code: state.code,
    errors: state.errors,
    isSubmitting: state.isSubmitting,
    setStep,
    handleInputChange,
    sendPhoneNumber,
    reSendPhoneNumber,
    verifyPhoneCode,
  };
};

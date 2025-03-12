import React, { useState } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { PhoneStep } from './phone/PhoneStep';
import CodeStep from './code/CodeStep';

export const PhoneAuthForm: React.FC<PhoneAuthFormProps> = ({
  step,
  phoneNumber,
  code,
  errors,
  isSubmitting,
  handleInputChange,
  sendPhoneNumber,
  reSendPhoneNumber,
  verifyPhoneCode,
}) => {
  const [codeCounter, setCodeCounter] = useState<number>(60);

  return (
    <div className="font-customFont w-full h-[75vh] max-w-sm mx-auto p-4">
      {step === 'phone' ? (
        <PhoneStep
          phoneNumber={phoneNumber}
          errors={errors}
          isSubmitting={isSubmitting}
          handleInputChange={handleInputChange}
          sendPhoneNumber={sendPhoneNumber}
        />
      ) : (
        <CodeStep<'phoneNumber' | 'code'>
          targetLabel={' четырехзначный код на номер ' + phoneNumber}
          currentStep={step}
          inputValue={code}
          inputLength={4}
          isSubmitting={isSubmitting}
          errors={{ inputError: errors.code }}
          timer={codeCounter}
          setTimer={setCodeCounter}
          onInputChange={handleInputChange}
          onVerify={verifyPhoneCode}
          onResend={reSendPhoneNumber}
        />
      )}
    </div>
  );
};

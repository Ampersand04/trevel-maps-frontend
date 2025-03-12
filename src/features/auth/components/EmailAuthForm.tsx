import React, { useState } from 'react';
import { EmailAuthFormProps } from '../interfaces/EmailAuthFormProps.interface';
import EmailStep from './email/EmailStep';
import CodeStep from './code/CodeStep';

export const EmailAuthForm: React.FC<EmailAuthFormProps> = ({
  step,
  email,
  code,
  isSubmitting,
  errors,
  handleInputChange,
  verifyEmailCode,
  sendEmail,
  reSendEmail,
}) => {
  const [codeCounter, setCodeCounter] = useState<number>(60);

  return (
    <div className="font-customFont w-full h-[75vh] max-w-sm mx-auto p-4">
      {step === 'email' ? (
        <EmailStep
          email={email}
          isSubmitting={isSubmitting}
          errors={errors}
          handleInputChange={handleInputChange}
          sendEmail={sendEmail}
        />
      ) : (
        <CodeStep<'email' | 'code'>
          targetLabel={email}
          currentStep={step}
          inputValue={code}
          inputLength={6}
          isSubmitting={isSubmitting}
          errors={{ inputError: errors.code }}
          timer={codeCounter}
          setTimer={setCodeCounter}
          onInputChange={handleInputChange}
          onVerify={verifyEmailCode}
          onResend={reSendEmail}
        />
      )}
    </div>
  );
};

export default EmailAuthForm;

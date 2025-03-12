import React from 'react';
import OtpInput from '@/components/forms/OptInput/OptInput';
import { CodeCounter } from '../../helpers/codeCounter';
import { ICodeStep } from './CodeStep.interface';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const CodeStep = <TField extends string>({
  currentStep,
  targetLabel,
  inputValue,
  inputLength = 6,
  isSubmitting,
  errors,
  timer,
  setTimer,
  onInputChange,
  onVerify,
  onResend,
}: ICodeStep<TField>) => {
  return isSubmitting ? (
    <div className="h-full">
      <div className="absolute inset-0 flex gap-3 flex-col justify-center items-center h-screen backdrop-brightness-50">
        <Spin
          indicator={
            <LoadingOutlined
              spin
              style={{
                color: '#E4721B',
                fontSize: 60,
              }}
            />
          }
          size="large"
        />
        <span className="text-white font-medium">Авторизация...</span>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h2 className="text-[28px] font-medium py-1 m-0 text-white leading-5">
          Введите код
        </h2>
        <p className="text-sm text-white-200 leading-5">
          Мы отправили <strong>{targetLabel}</strong>
        </p>
        <OtpInput
          length={inputLength}
          value={inputValue}
          onChange={(value) => onInputChange('code' as TField, value)}
          onComplete={onVerify}
          error={errors.inputError}
        />
      </div>

      <div className="mx-auto mb-10">
        <CodeCounter
          step={currentStep}
          codeCounter={timer}
          setCodeCounter={setTimer}
          reSendFn={onResend}
        />
      </div>
    </div>
  );
};

export default CodeStep;

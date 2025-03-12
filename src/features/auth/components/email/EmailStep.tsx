import React from 'react';
import { IonText } from '@ionic/react';
import { IEmailStep } from './EmailStep.interface';
import Input from '@/components/forms/Input/Input';
import Button from '@/components/forms/Button/Button';
import { handleOAuthLogin } from '../../utils/OAuthLogin';

const EmailStep: React.FC<IEmailStep> = ({
  email,
  isSubmitting,
  errors,
  handleInputChange,
  sendEmail,
}) => {
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex flex-col justify-between gap-4">
        <IonText color="light">
          <h2 className="text-[28px] font-medium p-1 m-0 text-white leading-5">
            Добро пожаловать!
          </h2>
          <p className="text-sm text-white-200 p-1 mt-3 leading-5">
            Введите email, чтобы получить код для авторизации
          </p>
        </IonText>
        <form onSubmit={handleEmailSubmit} className="space-y-3">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
          />
          <Button type="submit" disabled={isSubmitting || !!errors.email}>
            Получить код
          </Button>
        </form>

        <p className="text-sm text-white-300 text-center">
          Нажимая «Получить код», вы принимаете условия
          <a href="/home" className="text-white-200">
            {' '}
            Политики конфиденциальности
          </a>
        </p>

        <div className="flex flex-col items-center gap-3 pt-10">
          <p className="text-sm text-white-200">
            Авторизоваться другим способом
          </p>
          <div className="flex items-center gap-4">
            <div
              onClick={() => handleOAuthLogin('yandex')}
              className="rounded-lg bg-dark-300 flex w-12 h-12 items-center justify-center"
            >
              <img src="/icons/yandex.svg" alt="Yandex" />
            </div>
            <div
              onClick={() => handleOAuthLogin('vk')}
              className="rounded-lg bg-dark-300 flex w-12 h-12 items-center justify-center"
            >
              <img src="/icons/VK.svg" alt="VK" />
            </div>
            <div
              onClick={() => handleOAuthLogin('gosuslugi')}
              className="rounded-lg bg-dark-300 flex w-12 h-12 items-center justify-center"
            >
              <img src="/icons/gosuslugi.svg" alt="Gosuslugi" />
            </div>
          </div>
        </div>
      </div>
      <IonText className="flex flex-col items-center gap-2 text-[13px] font-medium text-white-300 text-center">
        Нет доступа к почте?
        <a href="/auth/phone" className="text-white-200">
          {' '}
          Авторизоваться по номеру телефона
        </a>
      </IonText>
    </div>
  );
};

export default EmailStep;

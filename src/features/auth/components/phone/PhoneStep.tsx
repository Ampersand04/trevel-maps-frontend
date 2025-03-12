import React from 'react';
import Input from '../../../../components/forms/Input/Input';
import Button from '@/components/forms/Button/Button';
import { handleOAuthLogin } from '../../utils/OAuthLogin';
import { IonText } from '@ionic/react';

export const PhoneStep: React.FC<IPhoneStep> = ({
  phoneNumber,
  errors,
  isSubmitting,
  handleInputChange,
  sendPhoneNumber,
}) => {
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendPhoneNumber();
  };

  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex flex-col justify-between gap-4">
        <IonText>
          <h2 className="text-[28px] font-medium p-1 m-0 text-white leading-5">
            Добро пожаловать!
          </h2>
          <p className="text-sm text-white-200 p-1 mt-3 mb-2 leading-5">
            Введите номер телефона, чтобы получить код для авторизации
          </p>
        </IonText>

        <form onSubmit={handlePhoneSubmit} className="space-y-3">
          <Input
            label="Номер телефона"
            type="tel"
            name="phoneNumber"
            placeholder="+7 (000) 000-00-00"
            disabled={isSubmitting}
            value={phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            error={errors.phoneNumber}
          />
          <Button type="submit" disabled={isSubmitting || !!errors.phoneNumber}>
            Получить код
          </Button>
        </form>

        <IonText className="text-sm text-white-300 text-center">
          Нажимая «Получить код», вы принимаете условия
          <a href="/home" className="text-white-200">
            {' '}
            Политики конфиденциальности
          </a>
        </IonText>
      </div>

      <div className="flex flex-col items-center gap-3">
        <IonText className="text-sm text-white-300">
          Авторизоваться другим способом
        </IonText>
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

      <IonText className="flex flex-col items-center gap-2 text-[13px] font-medium text-white-300 text-center">
        Нет доступа к телефону?
        <a href="/auth/email" className="text-white-200">
          {' '}
          Авторизоваться по почте
        </a>
      </IonText>
    </div>
  );
};

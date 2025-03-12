import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AuthLayout from '@/components/layouts/AuthLayout';
import { usePhoneAuth } from '../hooks/usePhoneAuth';
import { PhoneAuthForm } from '../components/PhoneAuthForm';

const PhoneAuthPage: React.FC = () => {
  const {
    step,
    phoneNumber,
    code,
    isSubmitting,
    errors,
    setStep,
    handleInputChange,
    sendPhoneNumber,
    reSendPhoneNumber,
    verifyPhoneCode,
  } = usePhoneAuth();

  return (
    <IonPage>
      <IonContent fullscreen className="relative">
        <AuthLayout>
          <PhoneAuthForm
            step={step}
            phoneNumber={phoneNumber}
            code={code}
            errors={errors}
            isSubmitting={isSubmitting}
            setStep={setStep}
            handleInputChange={handleInputChange}
            sendPhoneNumber={sendPhoneNumber}
            reSendPhoneNumber={reSendPhoneNumber}
            verifyPhoneCode={verifyPhoneCode}
          />
        </AuthLayout>
      </IonContent>
    </IonPage>
  );
};

export default PhoneAuthPage;

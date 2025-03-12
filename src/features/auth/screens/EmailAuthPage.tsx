import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AuthLayout from '@/components/layouts/AuthLayout';
import { useEmailAuth } from '../hooks/useEmailAuth';
import EmailAuthForm from '../components/EmailAuthForm';

const EmailAuthPage: React.FC = () => {
  const {
    step,
    email,
    isSubmitting,
    code,
    errors,
    setStep,
    handleInputChange,
    sendEmail,
    reSendEmail,
    verifyEmailCode,
  } = useEmailAuth();

  return (
    <IonPage>
      <IonContent fullscreen className="relative">
        <AuthLayout>
          <EmailAuthForm
            step={step}
            email={email}
            code={code}
            errors={errors}
            isSubmitting={isSubmitting}
            setStep={setStep}
            handleInputChange={handleInputChange}
            sendEmail={sendEmail}
            reSendEmail={reSendEmail}
            verifyEmailCode={verifyEmailCode}
          />
        </AuthLayout>
      </IonContent>
    </IonPage>
  );
};

export default EmailAuthPage;

import React from 'react';
import { IonButton } from '@ionic/react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLIonButtonElement> {
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <IonButton
      className={`font-customFont font-medium w-full rounded-md ${
        disabled
          ? 'text-dark-200 bg-dark-400 cursor-not-allowed active:bg-dark-400'
          : 'bg-ButtonGradient active:bg-ButtonActiveGradient transition duration-200 ease-in-out transform active:scale-95'
      } ${className}`}
      disabled={disabled}
      fill="clear"
      {...props}
    >
      {children}
    </IonButton>
  );
};

export default Button;

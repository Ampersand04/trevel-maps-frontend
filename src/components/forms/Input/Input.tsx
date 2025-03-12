import React from 'react';
import { InputProps } from './Input.interface';
import { IonLabel } from '@ionic/react';

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  placeholder = '',
  value,
  onChange,
  error,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <IonLabel
          // htmlFor={name}
          className="absolute block text-xs font-medium text-white-300 py-1 px-4 z-10"
        >
          {label}
        </IonLabel>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`relative w-full bg-dark-300 px-4 pt-5 pb-2 focus:outline-orange border-none ${
          error ? 'focus:outline-red-100 border-red-100' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:outline-offset-0 focus:border-orange ${
          disabled ? ' cursor-not-allowed' : ''
        }`}
      />

      {error && <p className="text-sm text-red-100 pl-1 mt-1">{error}</p>}
    </div>
  );
};

export default Input;

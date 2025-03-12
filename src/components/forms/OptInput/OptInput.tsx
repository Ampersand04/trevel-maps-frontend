import React, { useRef, useState } from 'react';

const OtpInput: React.FC<OtpInputProps> = ({
  length,
  value,
  onChange,
  error,
  disabled = false,
  onComplete,
}) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputVal = e.target.value;

    if (/^\d$/.test(inputVal)) {
      const updatedValue = value.split('');
      updatedValue[index] = inputVal;
      const newValue = updatedValue.join('');
      onChange(newValue);

      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
        setFocusedIndex(index + 1);
      }
      if (newValue.length === length && !newValue.includes('')) {
        onComplete?.(newValue);
      }
    } else if (inputVal === '') {
      const updatedValue = value.split('');
      updatedValue[index] = '';
      onChange(updatedValue.join(''));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        const updatedValue = value.split('');
        updatedValue[index - 1] = '';
        onChange(updatedValue.join(''));
        inputsRef.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      }
    }
  };

  const handleTouchStart = (
    e: React.TouchEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target instanceof HTMLInputElement && e.target.value === '') {
      inputsRef.current[index]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 justify-center items-center">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el!)}
            type="number"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => handleFocus(index)}
            disabled={disabled}
            onTouchStart={(e) => handleTouchStart(e, index)}
            className={`min-w-10 h-12 flex-1 text-center text-xl font-medium border-2 rounded-lg outline-none border-none  focus:ring-2 focus:ring-orange ${
              error ? 'focus:ring-red-100 border-red-100' : 'border-gray-300'
            } ${
              focusedIndex === index
                ? 'border-orange focus:ring-orange'
                : 'border-gray-400'
            } ${
              disabled
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-dark-300 text-white'
            }`}
          />
        ))}
      </div>
      {error && <p className="text-sm text-red-100 mt-1">{error}</p>}
    </div>
  );
};

export default OtpInput;

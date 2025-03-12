import { useEffect } from 'react';

interface ICodeCounter {
  codeCounter: number;
  setCodeCounter: React.Dispatch<React.SetStateAction<number>>;
  step: string;
  reSendFn: () => void;
}

export const CodeCounter: React.FC<ICodeCounter> = ({
  step,
  codeCounter,
  setCodeCounter,
  reSendFn,
}) => {
  useEffect(() => {
    if (step === 'code') {
      if (codeCounter > 0) {
        const timer = setTimeout(() => setCodeCounter(codeCounter - 1), 1000);
        return () => clearTimeout(timer);
      }
    } else {
      setCodeCounter(60);
    }
  }, [step, codeCounter, setCodeCounter]);

  return (
    <>
      {codeCounter > 0 ? (
        <p className="text-white-300">
          Отправить повторно через 0:
          {codeCounter < 10 ? `0` + codeCounter : codeCounter}
        </p>
      ) : (
        <p
          className="font-medium text-white p-3"
          onClick={() => {
            reSendFn();
            setCodeCounter(60);
          }}
        >
          Отправить код повторно
        </p>
      )}
    </>
  );
};

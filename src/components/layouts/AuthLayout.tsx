import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative overflow-hidden min-h-screen max-h-full flex flex-col bg-dark-200 pt-10">
      <div className="absolute top-[-120px] right-[-130px] w-96 h-96 bg-ActiveGradient z-0"></div>
      <div className="absolute bottom-[-240px] left-[-160px] w-96 h-96 bg-ActiveGradient z-0"></div>
      <img
        className="max-w-screen-sm mx-auto"
        src="/illustrations-for-auth-page.png"
        alt=""
        loading="lazy"
      />
      <img
        className="absolute bottom-1 left-1"
        src="/illustrations2-for-auth-page.png"
        alt=""
        loading="lazy"
      />
      <section className="z-10 h-fit">{children}</section>
    </div>
  );
};

export default AuthLayout;

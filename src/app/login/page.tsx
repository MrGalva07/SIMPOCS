'use client';

import React, { Suspense } from 'react';
import LoginForm from '../../components/Forms/LoginForm';

const Page = () => {
  return (
    <div className="items-center flex bottom-0 bg-gradient-login">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default Page;

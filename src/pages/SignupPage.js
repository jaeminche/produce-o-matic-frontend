import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignupForm from '../containers/auth/SignupForm';

const SignupPage = () => {
  return (
    <AuthTemplate>
      <SignupForm></SignupForm>
    </AuthTemplate>
  );
};

export default SignupPage;

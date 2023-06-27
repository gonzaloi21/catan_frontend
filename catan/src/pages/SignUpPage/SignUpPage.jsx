import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Navbar from '../../components/Navbar/Navbar';

function SignUpPage() {
  return (
    <>
        <Navbar />
        <div className='signup-page'>
            <SignUpForm />
        </div>
    </>
  );
}

export default SignUpPage;
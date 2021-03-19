import React from 'react';

import FormikContainer from './FormikContainer';
import YoutubeForm from './YoutubeForm';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import EnrollmentForm from './EnrollmentForm';

import '../App.css';

function CompletFormikDemo() {
  return (
    <div className='App'>
      <h1 style={{ color: 'red' }}>Sample Basic Form Using Formik</h1>
      <YoutubeForm />
      <h1 style={{ color: 'red' }}>Formik Input Reusable Component</h1>
      <FormikContainer />
      <h1 style={{ color: 'red' }}>
        Sample Login Form Using Input Reusable Component
      </h1>
      <LoginForm />
      <h1 style={{ color: 'red' }}>
        Sample Registration Form Using Input Reusable Component
      </h1>
      <RegistrationForm />
      <h1 style={{ color: 'red' }}>
        Sample Enrollment Form Using Input Reusable Component
      </h1>
      <EnrollmentForm />
    </div>
  );
}

export default CompletFormikDemo;

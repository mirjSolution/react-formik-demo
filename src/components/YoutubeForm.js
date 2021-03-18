// npm install formik
// npm install yup

import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

// Logs
// console.log(formik.errors)
// console.log(formik.values)
// console.log(formik.touched) -> if this field is visited or not

// Form initial values
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

// Submit form
const onSubmit = (values) => {
  console.log('Form data', values);
};

// Validation schema using yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  // comments: Yup.string().required('Required'),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
};

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        console.log('Formik', formik);
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field type='text' id='email' name='email' />
              <ErrorMessage name='email' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field
                type='text'
                id='channel'
                name='channel'
                placeholder='Youtube channel name'
              />
              <ErrorMessage name='channel' component={TextError} />
            </div>
            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <Field
                as='textarea'
                id='comments'
                name='comments'
                validate={validateComments}
              />
              <ErrorMessage name='comments' component={TextError} />
              {/* <ErrorMessage name='comments'>
    {(errorMsg) => <div className='error'>{errorMsg}</div>}
  </ErrorMessage> */}
            </div>
            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {(props) => {
                  const { field, meta } = props;
                  // console.log('Field Render');
                  return (
                    <div>
                      <input type='text' id='address' {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className='form-control'>
              <label htmlFor='facebook'>Facebook Profile</label>
              <Field type='text' id='facebook' name='social.facebook' />
            </div>
            <div className='form-control'>
              <label htmlFor='twitter'>Twitter Profile</label>
              <Field type='text' id='twitter' name='social.twitter' />
            </div>
            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary Phone Number</label>
              <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>
            <div className='form-control'>
              <label htmlFor='secondarhPh'>Secondary Phone Number</label>
              <Field type='text' id='secondarhPh' name='phoneNumbers[1]' />
            </div>
            <div className='form-control'>
              <label>List of phone numbers</label>
              <FieldArray name='phNumbers'>
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // console.log('Form errors', form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type='button' onClick={() => push()}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type='button'
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit Comments
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit All
            </button>
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;

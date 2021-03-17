// npm install formik
// npm install yup

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
};

// Submit form
const onSubmit = (values) => {
  console.log('Form data', values);
};

// Validate input
// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = 'Required';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format';
//   }

//   if (!values.channel) {
//     errors.channel = 'Required';
//   }

//   return errors;
// };

// Validation schema using yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
          <Field as='textarea' id='comments' name='comments' />
          <ErrorMessage name='comments'>
            {(errorMsg) => <div className='error'>{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <Field name='address'>
            {(props) => {
              const { field, meta } = props;
              console.log('Render props', props);
              return (
                <div>
                  <input type='text' id='address' {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;

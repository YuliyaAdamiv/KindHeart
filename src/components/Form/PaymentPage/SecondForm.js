import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './SecondForm.css';

function BaseFormikSetValues() {
  const {
    values,
    handleSubmit,
    submitCount,
    getFieldProps,
    setValues,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      country: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.number()
        .min(8, 'Must be more than 8 characters')
        .required('Required'),
      country: Yup.string()
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
    }),
    onSubmit(values) {
      // We added a `username` value for the user which is everything before @ in their email address.
      setValues({
        ...values,
        username: `@${values.email.split('@')[0]}`,
      });
    },
  });

  useEffect(() => {
    if (values.email === 'flaggedemail@mail.com') {
      // It could be a string or any other type
      setFieldValue('isEmailFlagged', { flagged: true, reason: 'test' });
    }
  }, [values.email, setFieldValue]);

  return (
    <>
      <div className="formWrapper">
        <header className="baseFormHeader">
          <h2 className="baseFormHeading">Enter your email and password</h2>
        </header>
        <form className="baseForm" onSubmit={handleSubmit} noValidate>
          <div className="formRow">
            <div className="formFieldWrap">
              <label className="formFieldLabel" htmlFor="email">
                Email address
              </label>

              <div className="formFieldWrapInner">
                <input
                  type="email"
                  id="email"
                  className="email formField"
                  {...getFieldProps('email')}
                />
              </div>
              <span className="errorMessage">
                {touched['email'] && errors['email']}
              </span>
            </div>
          </div>
          <div className="formFieldWrap">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>

            <div className="formFieldWrapInner">
              <input
                type="password"
                id="password"
                className="password formField"
                {...getFieldProps('password')}
              />
            </div>
            <span className="passwordCue">Minimum length is 8 characters</span>
          </div>
          <span className="errorMessage">
            {touched['password'] && errors['password']}
          </span>
          <div className="formRow">
            <div className="formFieldWrap">
              <label className="formFieldLabel" htmlFor="country">
                Country
              </label>

              <div className="formFieldWrapInner">
                <input
                  type="text"
                  id="country"
                  className="email formField"
                  {...getFieldProps('country')}
                />
              </div>
              <span className="errorMessage">
                {touched['country'] && errors['country']}
              </span>
            </div>
          </div>
          <div className="formRow">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BaseFormikSetValues;

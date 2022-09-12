import React, { useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FirstForm() {
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
      firstname: Yup.string()
        .required('Required')
        .min(3, 'Must be more than 3 characters'),
      secondname: Yup.string()
        .required('Required')
        .min(3, 'Must be more than 3 characters'),
      namecompany: Yup.string()
        .required('Required')
        .min(3, 'Must be more than 3 characters'),
      city: Yup.string()
        .required('Required')
        .min(3, 'Must be more than 3 characters'),
      region: Yup.string()
        .required('Required')
        .min(3, 'Must be more than 3 characters'),
      address: Yup.string()
        .required('Required')
        .min(3, 'Must be more than 3 characters'),
      num: Yup.number()
        .min(10, 'Must be more than 10 characters')
        .required('Required'),
      url: Yup.string()
        .url()
        .required('Required')
        .min(10, 'Must be more than 10 characters'),
      post: Yup.number()
        .min(5, 'Must be more than 5 characters')
        .positive()
        .integer()
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
    <div className="fields">
      <form className="baseForm" onSubmit={handleSubmit} noValidate>
        <Row className="mb-4 col-50">
          <Form.Group as={Col} md="1"></Form.Group>
          <Form.Group as={Col} md="2">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="firstname">
                  First Name
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="firstname"
                    id="firstname"
                    className="email formField placeholder"
                    {...getFieldProps('firstname')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['firstname'] && errors['firstname']}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="secondname">
                  Last Name
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="secondname"
                    id="secondname"
                    className="email formField placeholder"
                    {...getFieldProps('secondname')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['secondname'] && errors['secondname']}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="2"></Form.Group>
          <Form.Group as={Col} md="4">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="country">
                  Country
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="country"
                    id="country"
                    className="email formField placeholder"
                    {...getFieldProps('country')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['country'] && errors['country']}
                </span>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Form.Group as={Col} md="1"></Form.Group>
        <Row className="mb-4 col-50">
          <Form.Group as={Col} md="1"></Form.Group>
          <Form.Group as={Col} md="4">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="namecompany">
                  Name company
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="namecompany"
                    id="namecompany"
                    className="email formField placeholder"
                    {...getFieldProps('namecompany')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['namecompany'] && errors['namecompany']}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="2" className="logotup">
            + Логотип
          </Form.Group>
          <Form.Group as={Col} md="2">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="city">
                  City
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="city"
                    id="city"
                    className="email formField placeholder"
                    {...getFieldProps('city')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['city'] && errors['city']}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="region">
                  Region
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="region"
                    id="region"
                    className="email formField placeholder"
                    {...getFieldProps('region')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['region'] && errors['region']}
                </span>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-5 col-50">
          <Form.Group as={Col} md="1"></Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="num">
                  Phone number (for example: 000-00-00-000)
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="num"
                    id="num"
                    className="email formField placeholder"
                    {...getFieldProps('num')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['num'] && errors['num']}
                </span>
              </div>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="2"></Form.Group>
          <Form.Group as={Col} md="4">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="address">
                  Address
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="address"
                    id="address"
                    className="email formField placeholder"
                    {...getFieldProps('address')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['address'] && errors['address']}
                </span>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-5 col-50">
          <Form.Group as={Col} md="1"></Form.Group>
          <Form.Group as={Col} md="4">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="url">
                  Website
                </label>
                <div className="formFieldWrapInner">
                  <input
                    type="url"
                    id="url"
                    className="email formField placeholder"
                    {...getFieldProps('url')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['url'] && errors['url']}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="2"></Form.Group>
          <Form.Group as={Col} md="2">
            <div>
              <div className="">
                <label className="formFieldLabel" htmlFor="post">
                  Post index
                </label>

                <div className="formFieldWrapInner">
                  <input
                    type="post"
                    id="post"
                    className="email formField placeholder"
                    {...getFieldProps('post')}
                  />
                </div>
                <span className="errorMessage">
                  {touched['post'] && errors['post']}
                </span>
              </div>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="2"></Form.Group>
        </Row>
      </form>
    </div>
  );
}
export default FirstForm;

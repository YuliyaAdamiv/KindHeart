import * as React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FirstForm from '../Form/PaymentPage/FirstForm';
import BaseFormik from '../Form/PaymentPage/SecondForm';

import HelpButton from '../Form/PaymentPage/HelpButton';
import './Form.css';

function FormExample() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [active, setActive] = useState(false);
  return (
    <div className="form-group">
      <Form noValidate validated={validated} onChange={handleSubmit}>
        <h1 className="center color">Заповніть форму</h1>
        <div className="center">
          <Button className="person" onClick={() => setActive('Fis')}>
            Фіз. особа
          </Button>
          <Button className="person-ur" onClick={() => setActive('Ur')}>
            Юр. особа
          </Button>
        </div>
        {active === 'Ur' && <BaseFormik />}
        {active === 'Fis' && <FirstForm />}
      </Form>
      <h1 className="center color kind">Види допомоги</h1>
      <h5 className="center color">Ви может змінити вид допомоги</h5>
      <HelpButton />
    </div>
  );
}

export default FormExample;

import * as React from "react";
import {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import PaymentPage from './PaymentPage/PaymentPage'
import {FaRegHandPaper} from 'react-icons/fa'
import {BiWallet} from 'react-icons/bi'
import {GiClothes} from 'react-icons/gi'
import {RiHeart2Line, RiMastercardFill, RiPaypalFill} from 'react-icons/ri'
import {IoCalculatorSharp} from 'react-icons/io5'
import {SiWebmoney, SiVisa} from 'react-icons/si'
import './Form.css'

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
   
  
    return (
        <div className="form-group">
      <Form noValidate validated={validated} onChange={handleSubmit}>
          
          <h1 className="center color">Заповніть форму</h1>
          <div className="center">
          <Button  className="person">Фіз. особа</Button><Button className="person-ur">Юр. особа</Button>
          </div>
          <div className="fields">
        <Row className="mb-4 col-50">
        <Form.Group as={Col} md="1" >
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>Ім'я</Form.Label>
            <Form.Control
              required
              type="text"
              className="placeholder"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Фамілія</Form.Label>
            <Form.Control
              required
              type="text"
              className="placeholder"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
          </Form.Group>
          <Form.Group   className='col-70' as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Країна</Form.Label>
            <Form.Control
              required
              type="text"
              className="placeholder"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4 col-50">
        <Form.Group as={Col} md="1" >
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Назва компанії, організації</Form.Label>
            <Form.Control type="text"  required  className="placeholder"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid name of organization.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" className="logotup" >
          + Логотип
          </Form.Group>
          <Form.Group className='col-70' as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Місто</Form.Label>
            <Form.Control type="text"  required className="placeholder"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label>Штат, район</Form.Label>
            <Form.Control type="text"  required className="placeholder"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid region.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-5 col-50">
        <Form.Group as={Col} md="1" >
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Email-адрес</Form.Label>
            <Form.Control type="text" className="placeholder" pattern='/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g' required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" >
          </Form.Group>
          <Form.Group className='col-70' as={Col} md="4" controlId="validationCustom08">
            <Form.Label>Адреса</Form.Label>
            <Form.Control type="text"  required className="placeholder"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-5 col-50">
        <Form.Group as={Col} md="1" >
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom09">
            <Form.Label>Номер телефону</Form.Label>
            <Form.Control type="text" maxLength={9}
        pattern="[+-]?\d+(?:[.,]\d+)?" required className="placeholder"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" >
          </Form.Group>
          <Form.Group className='col-70' as={Col} md="2" controlId="validationCustom10">
            <Form.Label>Поштовий індекс</Form.Label>
            <Form.Control type="text" maxLength={5}
        pattern="\d+(?:[.,]\d+)?" required  className="placeholder"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid post ID.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" >
          </Form.Group>
        </Row>
        </div>
       
      </Form>
      <h1 className="center color kind">Види допомоги</h1>
        <h5 className="center color">Ви может змінити вид допомоги</h5>
        <div className="section-button">
        <Row className="mb-3">
        <Form.Group as={Col} md="1" >
          </Form.Group>
          <Form.Group as={Col} md="2" className="text" >
            <Button className="do"><FaRegHandPaper size={50}/></Button>
           <h5 className="name e">Зробити</h5> 
          </Form.Group>
          <Form.Group as={Col} md="3"  lassName="text">
          <Button className="do" ><BiWallet size={50}/></Button>
         <h5 className="name"> Фінансова <br /> допомога</h5>
          </Form.Group>
          <Form.Group as={Col} md="3" lassName="text">
            <Button className="do"><GiClothes size={50}/></Button>
            <h5 className="name">Матеріальна <br /> допомога</h5>
          </Form.Group>
          <Form.Group as={Col} md="3" lassName="text">
          <Button className="do"><RiHeart2Line size={50}/></Button>
         <h5 className="name">Волонтерство</h5> 
          </Form.Group>
        </Row>
        </div>
      <div className="main">
       
       <Form   className="form align-left">
       
       <div>
       <p>Спосіб оплати</p>
       <Button  className="container">
         <RiMastercardFill size={50}/>  <SiVisa size={50}/>
         <p>Карта Visa / MasterCard</p>
       </Button>
       <Button  className="container ">
       <p size={50}><b>Приват 24</b></p>
       <p>Приват 24</p>
     </Button>
     <Button  className="container">
     <IoCalculatorSharp size={50}/>
       <p>Термінали України</p>
     </Button>
     </div>
     <div>
       <Button  className="container">
       <SiWebmoney className="webmoney"size={30}/>
       <p>WebMoney</p>
       <p>WebMoney</p>
     </Button>
     <Button  className="container">
       <RiPaypalFill size={50}/>
       <p>PayPal</p>
     </Button>
     </div>
    </Form>
    
    </div>
    <div className="center">
   
    <PaymentPage  className="align-right "/>
       </div>

</div>
    );
  }
  
  export default FormExample
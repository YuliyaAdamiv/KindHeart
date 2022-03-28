import React from "react"
import { Form, Row, Col } from 'react-bootstrap'

function FirstForm (){
return(
           
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
          
        )
    }
export default FirstForm
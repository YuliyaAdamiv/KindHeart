import React from "react"
import {useState} from 'react';
import CreditCards from './CreditCard'
import {FaRegHandPaper} from 'react-icons/fa'
import {BiWallet} from 'react-icons/bi'
import {GiClothes} from 'react-icons/gi'
import {RiHeart2Line} from 'react-icons/ri'
import { Form, Button, Row, Col } from 'react-bootstrap'

function HelpButton() {
   
        const[active, setActive]=useState(false);
        return(
            <div className="section-button">
            <Row className="mb-3">
            <Form.Group as={Col} md="1" >
              </Form.Group>
              <Form.Group as={Col} md="2" className="text" >
                <Button className="do"><FaRegHandPaper size={50}/></Button>
               <h5 className="name e">Зробити</h5> 
              </Form.Group>
              <Form.Group as={Col} md="3"  lassName="text">
              <Button className="do" onClick={()=>setActive('Finance')}><BiWallet size={50}/></Button>
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
            {active==='Finance'&&<CreditCards />}
            </div>
            
           
        )
    }

export default HelpButton
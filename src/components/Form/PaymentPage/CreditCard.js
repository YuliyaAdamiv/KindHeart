import React from "react"
import PaymentPage from '../PaymentPage/PaymentPage'
import { Form, Button } from 'react-bootstrap'
import {IoCalculatorSharp} from 'react-icons/io5'
import {SiWebmoney, SiVisa} from 'react-icons/si'
import {RiMastercardFill, RiPaypalFill} from 'react-icons/ri'

class CreditCards extends React.Component {
    render() {
        return(
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
   
    <div className="center">
   
    <PaymentPage  className="align-right "/>
       </div>
       </div>
            )
    }
}
export default CreditCards
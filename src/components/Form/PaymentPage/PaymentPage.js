import React from "react";
import SquarePaymentForm, { ContextConsumer } from "react-square-payment-form";
import CreditCardCVVInput from "./react-square-payment-form/lib/components/CreditCardCVVInput";
import CreditCardExpirationDateInput from "./react-square-payment-form/lib/components/CreditCardExpirationDateInput";
import CreditCardNumberInput from "./react-square-payment-form/lib/components/CreditCardNumberInput";
import "react-square-payment-form/lib/default.css";
import "./PaymentPage.css";

class MySubmitButton extends React.Component {
  handleSubmit = createNonce => evt => {
    evt.preventDefault();

    console.log("validate inputs");

    createNonce(evt);
  };
  render() {
    return (
      <ContextConsumer >
        {context => (
          <button
            className="sq-creditcard"
            onClick={this.handleSubmit(context.onCreateNonce)}
          >
            Допомогти
          </button>
        )}
      </ContextConsumer>
    );
  }
}

class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessages: []
    };
  }

  cardNonceResponseReceived = (
    errors,
    nonce,
    cardData,
    buyerVerificationToken
  ) => {
    if (errors) {
      this.setState({ errorMessages: errors.map(error => error.message) });
      return;
    }

    this.setState({ errorMessages: [] });
    alert(
      "nonce created: " +
        nonce +
        ", buyerVerificationToken: " +
        buyerVerificationToken
    );
  };

  createVerificationDetails() {
    return {
      amount: "100.00",
      currencyCode: "USD",
      intent: "CHARGE",
      billingContact: {
        familyName: "Smith",
        givenName: "John",
        email: "jsmith@example.com",
        country: "GB",
        city: "London",
        addressLines: ["1235 Emperor's Gate"],
        postalCode: "SW7 4JA",
        phone: "020 7946 0532"
      }
    };
  }

  render() {
    return (
      <div  className="content">
        <p>Введіть наступні дані</p>
        <SquarePaymentForm
          sandbox={true}
          applicationId="sandbox-sq0idb-n4mzcCIiNdMHujYr3MCUoA"
          locationId="0W13DP1FH6X23"
          cardNonceResponseReceived={this.cardNonceResponseReceived}
          createVerificationDetails={this.createVerificationDetails}
          
        >
          <fieldset className="sq-fieldset container">
          
            <CreditCardNumberInput />

            <div className="sq-form-third">
               
              <CreditCardExpirationDateInput />
            </div>

            <div className="sq-form-third">
            </div>

            <div className="sq-form-third">
           
              <CreditCardCVVInput />
            </div>
          </fieldset>

          <MySubmitButton  className="help"/>
        </SquarePaymentForm>
        <div className="sq-error-message">
          {this.state.errorMessages.map(errorMessage => (
            <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
          ))}
        </div>
        
      </div>
    );
  }
}
export default PaymentPage
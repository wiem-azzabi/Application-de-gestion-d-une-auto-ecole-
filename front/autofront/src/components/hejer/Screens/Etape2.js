import React, { Component } from "react";
import "./Form.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const product = {
  name: "Abonnement Auto-école",
  price: 500,
  description: "Réussir Votre Permis",
};
async function handleToken(token, addresses) {
  const response = await axios.post(
    "https://localhost:3001/checkout",
    { token, product }
  );

  const { status } = response.data;
  console.log("Response:", response.data);
  console.log(status);
  if (status === "success") {
    toast("Succès! Vérifiez votre e-mail pour plus de détails", {
      type: "success",
    });

    <div className="buttons">
      <button className="btn btn-primary" onClick={this.props.nextStep}>
        Continue
      </button>
    </div>;
  } else {
    toast("Une erreur c'est produite", { type: "error" });
  }
}

export class Etape2 extends Component {
  render() {
    return (
      <div className="etape2class">
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <StripeCheckout
          stripeKey="pk_test_51JPQP8F9hBBaOvXmjcxSkqYQ930zydJvlLEIeAY3qKqeQBALx3Y1S7PtwX45QDOCWWLAMzZn6OMzJQojypAMa7iA00SIhptrx8"
          token={handleToken}
          amount={product.price * 100}
          billingAddress
          shippingAddress
          name="Abonnement Auto-école"
        />
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="buttons"></div>
      </div>
    );
  }
}

export default Etape2;

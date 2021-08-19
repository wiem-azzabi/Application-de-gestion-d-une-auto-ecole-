const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51JPQP8F9hBBaOvXmrEXXwT9bWrr5ER3cai3dNctyJOp0FX730rZMa2CKkhemO7Y5OKW3t6XfuMQI9S0iAMAdc33A00R6qttwmh"
);
// const uuid = require("uuid/v4");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

module.exports = router;

// routes/payment.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
router.post("/api/create-payment-intent", async (req, res) => {
  const { amount } = req.body; // amount in rupees

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in paisa
      currency: "inr",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("Payment Intent Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

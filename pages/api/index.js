const express = require('express');
const Head = require("next/head");
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kevingerges47:uY4t5bFwRAWpfhXv@cluster0.mexmeg0.mongodb.net/mydatabase?retryWrites=true&w=majority");


// Create a schema and model for the email subscriptions.
const subscriptionSchema = new mongoose.Schema({
  email: String,
  subscribed: Boolean,
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

app.use(bodyParser.json());

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


// ...

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  const trimmedEmail = email.trim();
  console.log(req.body);

  if (!isValidEmail(trimmedEmail)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const existingSubscription = await Subscription.findOne({ email: trimmedEmail });

    if (existingSubscription) {
      console.log(`Email ${trimmedEmail} already subscribed`);
      return res.status(409).json({ message: 'Email already subscribed' });
    } else {
      const newSubscription = new Subscription({ email: trimmedEmail, subscribed: true });
      await newSubscription.save();
      console.log(`Email ${trimmedEmail} subscribed successfully`);
      return res.status(200).json({ message: 'Subscription successful' });
    }
  } catch (error) {
    console.error('Error subscribing:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

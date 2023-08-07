const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { strongPasswordChecker } = require('./passwordChecker');
let cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
// MongoDB setup
mongoose.connect('mongodb://localhost:27017/password_checker', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

const PasswordResultSchema = new mongoose.Schema({
  password: String,
  steps: Number,
});

const PasswordResult = mongoose.model('PasswordResult', PasswordResultSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/calculate', async (req, res) => {
  const password = req.body.password;
  
  // Calculate the steps using your strongPasswordChecker function here
   const steps = strongPasswordChecker(password);

  // Save the result to MongoDB
  const result = new PasswordResult({
    password: password,
     steps: steps,
  });

  try {
    await result.save();
    res.status(201).json({ message: 'Success',  steps: steps});
  } catch (error) {
    console.error('Error saving result:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

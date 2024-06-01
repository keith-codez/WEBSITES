// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB (replace 'formData' with your database name)
mongoose.connect('mongodb://localhost:27017/formData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema and model for form data
const formSchema = new mongoose.Schema({
  firstName: String,
  surname: String,
  organisation: String,
  vehicle: String,
  email: String,
  pickupDate: Date,
  dropOffDate: Date,
  phone: String,
  destination: String,
  moreInfo: String
});

const FormData = mongoose.model('FormData', formSchema);

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const formData = new FormData(req.body);
  formData.save()
    .then(() => res.send('Form data saved successfully!'))
    .catch(err => res.status(400).send('Error saving form data: ' + err));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
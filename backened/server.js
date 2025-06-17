const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy login credentials
const VALID_EMAIL = 'admin@1234';
const VALID_PASSWORD = 'admin';

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', { email, password });

  // Validate credentials
  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    return res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Vulnerable example with eval()
app.get('/eval', (req, res) => {
  let input = req.query.input;
  let result = eval(input); // Dangerous!
  res.send("Result: " + result);
});

// Safe endpoint
app.get('/', (req, res) => {
  res.send("Hello from Secure Node App!");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

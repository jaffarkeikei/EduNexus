const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// A route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the EduNexus API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
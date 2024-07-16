const express = require('express');
const app = express();
const port = 7002;

app.get('/', (req, res) => {
  res.send('Hello from the second server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app = express();
const port = 7001;

app.get('/', (req, res) => {
  res.send('Hello from the first server!');
});

app.listen(port, () => {
  console.log(`Server 1 is running on port ${port}`);
});

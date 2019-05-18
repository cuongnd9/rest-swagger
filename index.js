const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('👋 Chao Xin');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

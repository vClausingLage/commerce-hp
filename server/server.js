const express = require('express');
const products = require('./routes/products');
const PORT = 4000;

const app = express();

app.use('/products', products);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

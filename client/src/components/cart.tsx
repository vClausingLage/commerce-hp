import { useState } from 'react';

interface Products {}

const Cart = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <h1>the following products are in your cart</h1>
    </>
  );
};

export default Cart;

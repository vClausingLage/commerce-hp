import * as React from 'react';
import Card from './card.component';

function Products() {
  let products = [
    {
      title: 'Test 1',
      description: 'Does it all',
      price: 15,
      picture: 'pic1.jpeg',
    },
    {
      title: 'Test 2',
      description: 'Does it even better',
      price: 20,
      picture: 'pic2.jpeg',
    },
  ];

  return (
    <>
      <h1>Products</h1>

      {products.map((item, index) => {
        <Card key={index} title={item.title} description={item.description} />;
      })}
    </>
  );
}

export default Products;

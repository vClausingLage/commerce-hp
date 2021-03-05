import * as React from 'react';
import Card from './card.component';

function Products() {
  let products: {
    title: string;
    description: string;
    price: number;
    picture: string;
  }[] = [
    {
      title: 'Product 1',
      description: 'Does it all',
      price: 15,
      picture: '/images/pic2.jpg',
    },
    {
      title: 'Product 2',
      description: 'Does it even better',
      price: 20,
      picture: '/images/pic3.jpg',
    },
  ];

  return (
    <>
      <h1>Products</h1>
      <div className='products-grid'>
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            picture={item.picture}
          />
        ))}
      </div>
    </>
  );
}

export default Products;

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
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      price: 15,
      picture: '/images/pic2.jpg',
    },
    {
      title: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      price: 20,
      picture: '/images/pic3.jpg',
    },
    {
      title: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      price: 40,
      picture: '/images/pic4.jpg',
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
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default Products;

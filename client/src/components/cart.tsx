interface User {
  user: String;
}

const Cart: React.FunctionComponent<User> = (props) => {
  return (
    <>
      <p className='testHelloUser'>hello {props.user},</p>
      <h1>the following products are in your cart</h1>
    </>
  );
};

export default Cart;

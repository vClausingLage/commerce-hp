import * as React from 'react';

interface CardProps {
  title: string;
  description: string;
  price: number;
  picture: string;
  index: number;
}

interface ButtonProps {
  buttonName: string;
  buttonStyle: string;
  index: number;
}

const ButtonComponent: React.FunctionComponent<ButtonProps> = (props) => {
  function clickMe() {
    console.log();
  }

  return (
    <>
      <button onClick={(e) => clickMe()} className={props.buttonStyle}>
        {props.buttonName}
      </button>
    </>
  );
};

const Card: React.FunctionComponent<CardProps> = (props) => {
  let alt = 'product thumbnail';
  let buttonName = 'to cart...';
  let buttonStyle = 'card-button';

  return (
    <>
      <div className='card-container'>
        <div className='card-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='card-picture'>
          <figure>
            <img alt={alt} src={props.picture} />
          </figure>
        </div>
        <div className='card-description'>
          <p>{props.description}</p>
        </div>
        <ButtonComponent
          buttonName={buttonName}
          buttonStyle={buttonStyle}
          index={props.index}
        />
      </div>
    </>
  );
};

export default Card;

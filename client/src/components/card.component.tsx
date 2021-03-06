import * as React from 'react';

interface CardProps {
  title: string;
  description: string;
  price: number;
  picture: string;
  onClick: React.MouseEventHandler;
}

let testVar = '...';

const Card = (props: CardProps): JSX.Element => {
  let alt = 'product thumbnail';

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
      </div>
    </>
  );
};

export default Card;

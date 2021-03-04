import * as React from 'react';
import picture from '../pictures/pic2.jpg';

interface CardProps {
  title: string;
  description: string;
}

const Card = (props: CardProps): JSX.Element => {
  //let title = 'title';
  //let description = 'description';
  let alt = 'product thumbnail';

  return (
    <>
      <div className='card-container'>
        <div className='card-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='card-picture'>
          <figure>
            <img alt={alt} src={picture} />
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

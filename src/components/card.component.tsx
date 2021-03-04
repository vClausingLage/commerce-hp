import * as React from 'react';
import picture from '../pictures/pic2.jpg';

function Card() {
  let title = 'title';
  let description = 'description';
  let alt = 'data';

  return (
    <>
      <div className='card-container'>
        <div className='card-title'>
          <h2>{title}</h2>
        </div>
        <div className='card-picture'>
          <figure>
            <img alt={alt} src={picture} />
          </figure>
        </div>
        <div className='card-description'>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;

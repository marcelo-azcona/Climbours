import React from 'react';
import { Props } from '../ToursCard';

const CardFront = (props: Props) => {
  return (
    <div className="card__side card__side--front">
      <div className={`card__img card__img--${props.id}`}>&nbsp;</div>
      <h4 className="card__heading">
        <span className={`card__heading-span card__heading-span--${props.id}`}>
          {props.heading}
        </span>
      </h4>
      <div className="card__details">
        <ul>
          {Object.values(props.tour_details).map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardFront;

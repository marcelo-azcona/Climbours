import React from 'react';
import CardFront from './Card/CardFront';
import CardBack from './Card/CardBack';
import './ToursCard.scss';

export type Props = {
  price: string;
  heading: string;
  id: number;
  tour_details: {
    duration: string;
    capacity: string;
    guides: string;
    rest: string;
    difficulty: string;
  };
};

const ToursCard = (props: Props) => {
  return (
    <div className="card">
      <CardFront {...props} />
      <CardBack price={props.price} id={props.id} />
    </div>
  );
};

export default ToursCard;

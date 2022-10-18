import React from 'react';
import Button from '../../UI/Button';

type Props = {
  id: number;
  price: string;
};

const CardBack = (props: Props) => {
  return (
    <div className={`card__side card__side--back card__side--back-${props.id}`}>
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Only</p>
          <p className="card__price-value">{props.price}</p>
        </div>
        <Button type="button" className="btn btn--white">
          Check now!
        </Button>
      </div>
    </div>
  );
};

export default CardBack;

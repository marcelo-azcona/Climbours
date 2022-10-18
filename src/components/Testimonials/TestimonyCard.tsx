import React from 'react';
import HeadingTertiary from '../Headings/HeadingTertiary';
import './TestimonyCard.scss';

type Props = {
  src: string;
  alt: string;
  personName: string;
  heading: string;
  text: string;
  id: number;
};

const TestimonyCard = (props: { testimony: Props }) => {
  return (
    <div className="testimony">
      <figure className="testimony__shape">
        <img
          className="testimony__img"
          src={props.testimony.src}
          alt={props.testimony.alt}
        />
        <figcaption className="testimony__caption">
          {props.testimony.personName}
        </figcaption>
      </figure>
      <div className="testimony__text">
        <HeadingTertiary className="u-margin-bottom-small">
          {props.testimony.heading}
        </HeadingTertiary>
        <p>{props.testimony.text}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;

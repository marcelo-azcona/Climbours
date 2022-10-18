import React from 'react';
import './Composition.scss';

type Props = {
  src: string;
  alt: string;
  id: number;
};

const Composition = (props: Props) => {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        className={`composition__photo composition__photo--p${props.id}`}
      />
    </>
  );
};

export default Composition;

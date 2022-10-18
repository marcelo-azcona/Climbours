import React from 'react';
import './Recommendation.scss';

type Props = { title: string; paragraph: string };

const Recommendation = (props: Props) => {
  return (
    <>
      <h3 className="title-tertiary u-margin-bottom-small">{props.title}</h3>
      <p className="paragraph-about">{props.paragraph}</p>
    </>
  );
};

export default Recommendation;

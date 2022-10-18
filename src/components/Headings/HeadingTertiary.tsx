import React from 'react';
import './Heading.scss';

const HeadingTertiary = (props: { className: string; children: string }) => {
  return (
    <h3 className={`heading-tertiary ${props.className}`}>{props.children}</h3>
  );
};

export default HeadingTertiary;

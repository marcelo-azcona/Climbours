import React from 'react';
import './Heading.scss';

const HeadingSecondary = (props: { children: string; className: string }) => {
  return (
    <h2 className={`heading-secondary ${props.className}`}>{props.children}</h2>
  );
};

export default HeadingSecondary;

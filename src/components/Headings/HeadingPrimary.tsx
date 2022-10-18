import React from 'react';

type Props = {
  mainText: string;
  subText: string;
  children?: JSX.Element;
};

const HeadingPrimary = (props: Props) => {
  return (
    <h1 className="heading__primary">
      <p className="heading__primary--main">Nature</p>
      <p className="heading__primary--sub">is worth to discover</p>
    </h1>
  );
};

export default HeadingPrimary;

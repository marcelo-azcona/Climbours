import React from 'react';
import HeadingTertiary from '../../components/Headings/HeadingTertiary';
import './FeatureBox.scss';

type Props = {
  icon: JSX.Element;
  heading: string;
  text: string;
};

const FeatureBox = (props: Props) => {
  return (
    <div className="feature-box">
      <i className="feature-box__icon">{props.icon}</i>
      <HeadingTertiary className="">{props.heading}</HeadingTertiary>
      <p className="feature-box__text">{props.text}</p>
    </div>
  );
};

export default FeatureBox;

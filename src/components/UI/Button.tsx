import React from 'react';
import './Button.scss';

type Props = {
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

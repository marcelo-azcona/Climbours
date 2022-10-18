import React from 'react';

const NavigationItem = (props: { children: string }) => {
  return (
    <li className="navigation__item">
      <a href="#" className="navigation__link">
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;

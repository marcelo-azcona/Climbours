import React from 'react';
import './FooterItem.scss';

type Props = {
  children: string;
};

const FooterItem = (props: Props) => {
  return (
    <li className="footer__item">
      <a href="#" className="footer__link">
        {props.children}
      </a>
    </li>
  );
};

export default FooterItem;

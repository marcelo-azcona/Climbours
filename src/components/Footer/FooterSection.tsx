import React from 'react';
import { GiMountainRoad } from 'react-icons/gi';
import FooterItem from './FooterItem';
import './FooterSection.scss';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <GiMountainRoad className="footer__logo" />
        <p>Climbours</p>
      </div>

      <div className="container-footer">
        <div className="footer__navigation">
          <ul className="footer__list">
            <FooterItem>Company</FooterItem>
            <FooterItem>Contact us</FooterItem>
            <FooterItem>Careers</FooterItem>
            <FooterItem>Privacy policy</FooterItem>
            <FooterItem>Terms</FooterItem>
          </ul>
        </div>

        <div className="footer__copyright">
          <span>Built by</span>{' '}
          <a href="#" className="footer__link">
            Marcelo Azcona
          </a>{' '}
          using{' '}
          <a href="#" className="footer__link">
            React + Typescript
          </a>{' '}
          <span></span>
          <br />
          based in the Natours project from Jonas Schmedtmann
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

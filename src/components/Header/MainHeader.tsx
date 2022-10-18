import React from 'react';
import MainTitle from './MainTitle';
import Button from '../UI/Button';
import { GiMountainRoad } from 'react-icons/gi';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <GiMountainRoad size="7.5rem" color="white" />
        </div>
        <div className="header__text-box">
          <MainTitle />
          <Button type="button" className="btn btn--white">
            <a href="#">Check our tours!</a>
          </Button>
        </div>
      </header>
    </>
  );
};

export default MainHeader;

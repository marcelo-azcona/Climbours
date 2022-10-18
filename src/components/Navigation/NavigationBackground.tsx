import React from 'react';
import NavigationItem from './NavigationItem';
import './Navigation.scss';

const NavigationBackground = () => {
  return (
    <div className="navigation__background">
      <ul className="navigation__list">
        <NavigationItem>About Climbour</NavigationItem>
        <NavigationItem>Your benefits</NavigationItem>
        <NavigationItem>Popular tours</NavigationItem>
        <NavigationItem>Stories</NavigationItem>
        <NavigationItem>Book now</NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationBackground;

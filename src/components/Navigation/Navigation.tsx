import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import NavigationBackground from './NavigationBackground';
import './Navigation.scss';

const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const navigationOpenHandler = () => {
    setIsNavigationOpen((prevState) => !prevState);
  };

  return (
    <div className="navigation">
      <button
        onClick={navigationOpenHandler}
        type="button"
        className="navigation__button"
      >
        <span
          className={`navigation__icon ${
            isNavigationOpen ? 'navigation__icon--close' : ''
          }`}
        >
          &nbsp;
        </span>
      </button>

      <nav className="navigation__nav">
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={isNavigationOpen}
          timeout={500}
          classNames={{
            enter: 'navigation__open',
            enterActive: 'navigation__openActive',
            exit: 'navigation__close',
            exitActive: 'navigation__closeActive',
          }}
        >
          <NavigationBackground />
        </CSSTransition>
      </nav>
    </div>
  );
};

export default Navigation;

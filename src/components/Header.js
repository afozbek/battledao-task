import React, { useState, useRef } from 'react';

const Header = () => {
  const [isSideMenuOpened, setSideMenuOpened] = useState(false);

  const sideMenuRef = useRef();

  const openSideMenu = () => {
    setSideMenuOpened(true);
  };

  const overlaySideMenuClickHandler = (e) => {
    if (e.target === sideMenuRef.current) {
      setSideMenuOpened(false);
    }
  };

  return (
    <header className="o-header">
      <img
        className="o-header__logo"
        src="https://battledao.com/static/media/battledao.fb290868.png"
        alt="BattleDAO"
        height="50"
      />

      <div className={`o-header__desc ${isSideMenuOpened ? '-hide' : ''}`}>
        <button className="o-header__descBtn">Explore Tournaments</button>
        <button className="o-header__descBtn">New User Guide</button>
      </div>

      <div className={`o-header__auth ${isSideMenuOpened ? '-hide' : ''}`}>
        <button className="o-header__authBtn">Sign Up</button>
        <button className="o-header__authBtn">Sign In</button>
      </div>

      <div className="o-header__hamburgerWrapper" onClick={openSideMenu}>
        <label className="o-header__hamburger" onClick={openSideMenu}></label>
      </div>

      <div
        ref={sideMenuRef}
        onClick={overlaySideMenuClickHandler}
        className={`o-header__sideMenu ${isSideMenuOpened ? '-open' : ''}`}
      >
        <div className="o-header__sideMenuContent">
          <button className="o-header__descBtn -side">
            Explore Tournaments
          </button>
          <hr />
          <button className="o-header__descBtn -side">New User Guide</button>
          <hr />
          <button className="o-header__authBtn -side">Sign Up</button>
          <hr />
          <button className="o-header__authBtn -side">Sign In</button>
          <hr />
        </div>
      </div>
    </header>
  );
};

export default Header;

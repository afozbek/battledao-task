import React from 'react';

const Header = () => {
  return (
    <header className="o-header">
      <img
        className="o-header__logo"
        src="https://battledao.com/static/media/battledao.fb290868.png"
        alt="BattleDAO"
        height="50"
      />

      <div className="o-header__desc">
        <button className="o-header__descBtn">Explore Tournaments</button>
        <button className="o-header__descBtn">New User Guide</button>
      </div>

      <div className="o-header__auth">
        <button className="o-header__authBtn">Sign Up</button>
        <button className="o-header__authBtn">Sign In</button>
      </div>

      <input
        id="hamburgerCheck"
        name="hamburgerCheck"
        style={{ display: 'none' }}
        type="checkbox"
      />
      <label for="hamburgerCheck" className="o-header__hamburger"></label>
    </header>
  );
};

export default Header;

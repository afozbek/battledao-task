import React from 'react';

const Footer = () => {
  return (
    <footer className="o-footer">
      <div className="o-footer__links">
        <a className="o-footer__link" href="mailto:admin@battledao.com">
          Contact
        </a>
        <a className="o-footer__link" href="https://battledao.com/userGuide">
          User Guide
        </a>
        <a className="o-footer__link" href="https://www.consensys.net/about">
          About Consensys
        </a>
      </div>

      <div className="o-footer__desc">
        <p>BattleDAO © 2020</p>
        <p>A Consensys Project </p>

        <div className="o-footer__images">
          <img
            src="https://battledao.com/static/media/battledao.fb290868.png"
            alt="BattleDAO"
            height="35"
          />
          <img
            src="https://battledao.com/static/media/consensys.b1351559.png"
            alt="DAORY"
            style={{ marginLeft: 10 }}
            height="35"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

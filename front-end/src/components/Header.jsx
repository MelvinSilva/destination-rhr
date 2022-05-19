import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => { // effet d'apparition title header
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="header">
      <a href="/"><img className="logo" src="/images/logo.png" alt="logo" /></a>
      <span className="title">DESTINATION RHR</span>
      <div className="title-board">
        <span className="letter letter-D" />
        <span className="letter letter-E" />
        <span className="letter letter-S" />
        <span className="letter letter-T" />
        <span className="letter letter-I" />
        <span className="letter letter-N" />
        <span className="letter letter-A" />
        <span className="letter letter-T" />
        <span className="letter letter-I" />
        <span className="letter letter-O" />
        <span className="letter letter-N" />
        <span className="letter letter-blank" />
        <span className="letter letter-R" />
        <span className="letter letter-H" />
        <span className="letter letter-R" />
      </div>
      <img className="logo-sncf" src="/images/logosncf.png" alt="logo-sncf" />
    </div>
  );
}

export default Header;

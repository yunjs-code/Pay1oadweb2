import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const scrollY = window.scrollY;
      const backgroundHeight = document.querySelector('.background').offsetHeight;

      if (scrollY >= backgroundHeight - headerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className="inner">
        <div className="logo">Pay1oad</div>
        <nav>
          <a href="/" className="active">HOME</a>
          <a href="#blog">BlOG</a>
          <a href="#recruit">RECRUIT</a>
          <a href="#contact">CONTACT</a>
          <a href="/login">LOGIN</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

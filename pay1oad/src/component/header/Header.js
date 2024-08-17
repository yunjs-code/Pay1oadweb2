import React, { useEffect, useState } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const scrollY = window.scrollY;
      const backgroundHeight = document.querySelector('.background') ? document.querySelector('.background').offsetHeight : 0;

      if (scrollY >= backgroundHeight - headerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    if (location.pathname === '/blog') {
      setIsFixed(true);
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location]);

  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className="inner">
        <div> <a href="/" className="logo">Pay1oad</a></div>
        <nav>
          <a href="/" className="active">HOME</a>
          <a href="/blog">BLOG</a> {/* Changed href to /blog */}
          <a href="#ctf">CTF</a>
          <a href="#contact">CONTACT</a>
          <a href="/login">LOGIN</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

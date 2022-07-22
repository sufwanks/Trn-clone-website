import React, { useState, useEffect } from 'react';
import Link from '../Link/link';
import cmpLogo from '../../Images/tranetechlogo.svg'
import './navbar.css'
import { NavLink } from "react-router-dom";


function Navbar() {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
          <img className='comp-logo' src={cmpLogo} alt="" />
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>

                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                INDUSTRIES

              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                OUR PRODUCTS

              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                EQUAL

              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                SERVICES

              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                BLOG

              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                CAREERS
              </Link>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
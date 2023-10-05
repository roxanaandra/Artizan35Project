import untitled from '../assets/images/Untitled.png';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Menu from './Menu';
import Contact from './Contact';

const Header = () => {
  return (
    <>
    <header className='header_section'>
    <div className='header_links'>
        <Link to="/app">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </header>
    </>
  );
}

export default Header;

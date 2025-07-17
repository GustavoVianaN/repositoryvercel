'use client';
import React, { useState, useEffect } from 'react';
import './headers.css';
import AppBtn from './AppBtn';
import Nav from './Nav';
export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : undefined}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Advocacia</a>
        </h1>
        <Nav />
        <AppBtn name='Chat'/>
      </div>
    </header>
  );
}

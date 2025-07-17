'use client';
import React, { useState, useEffect } from 'react';
import './backToTopBtn.css';


export default function BackToTop() {
  const [scroll, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };
  }, [scroll]);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={backToTop}
      className="back-to-top d-flex align-items-center justify-content-center"
      style={{ display: scroll > 100 ? 'active' : 'none' }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </div>
  );
}
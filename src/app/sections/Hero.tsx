'use client';

import React, { useEffect } from 'react';
// REMOVA import GLightbox from 'glightbox';
import './hero.css';
import HeroBtn from '../components/HeroBtn';
import SectionFadeIn from '../components/SectionFadeIn';

export default function Hero() {
  useEffect(() => {
    import('glightbox').then(({ default: GLightbox }) => {
      GLightbox({
        selector: '.glightbox',
      });
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <SectionFadeIn duration={3200}>
          <div className="row">
            <div className="col-lg-8">
              <h1>
                Bem-vindo <span>Glauber Queiroz</span>
              </h1>
              <h2>Oferecendo soluções jurídicas de confiança!</h2>
              <div className="btns">
                <HeroBtn name="Agende uma Consulta" target="contato" />
              </div>
            </div>
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a
                href="assets/movies/movie-1.mp4"
                className="glightbox play-btn"
                data-type="video"
              ></a>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}

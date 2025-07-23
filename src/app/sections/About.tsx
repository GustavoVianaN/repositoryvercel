'use client';
import React from 'react';
import aboutImage from '../../../public/assets/images/about.jpg';
import './about.css';
import Image from 'next/image';
import SectionFadeIn from '../components/SectionFadeIn';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <SectionFadeIn>
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <Image src={aboutImage} alt="Direito Trabalhista" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
                Compromisso, ética e resultado na defesa trabalhista.
              </h3>
              <p className="fst-italic">
                Defendemos os direitos de trabalhadores e empresas com atuação prática e especializada.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Atendimento direto, claro e sigiloso.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Ação rápida em processos, acordos e consultoria preventiva.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Especialistas em proteção de dados: atuação conforme a LGPD.
                </li>
              </ul>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}

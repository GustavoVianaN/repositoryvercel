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
                Compromisso, ética e excelência na defesa dos direitos trabalhistas.
              </h3>
              <p className="fst-italic">
                Nossa equipe oferece assessoria especializada em Direito do Trabalho, focada na proteção dos direitos dos trabalhadores e empregadores.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Atendimento personalizado e sigiloso para questões trabalhistas.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Atuação em reclamações trabalhistas, acordos coletivos e consultoria preventiva.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Transparência, ética e compromisso com a solução eficiente de conflitos laborais.
                </li>
              </ul>
              <p>
                Na Glauber Advocacia, priorizamos a defesa dos direitos e a tranquilidade dos nossos clientes diante das demandas trabalhistas. Conte com uma equipe dedicada para garantir a melhor estratégia jurídica.
              </p>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}

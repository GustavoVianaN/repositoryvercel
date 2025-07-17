import React from 'react';
import aboutImage from '../../../public/assets/images/about.jpg';
import './about.css';
import Image from 'next/image';
import SectionFadeIn from '../components/SectionFadeIn';
export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <SectionFadeIn>          <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              Compromisso, ética e excelência em serviços jurídicos.
            </h3>
            <p className="fst-italic">
              Nossa equipe oferece assessoria especializada, focada nas necessidades do cliente e na busca das melhores soluções legais.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Atendimento personalizado e sigiloso para cada caso.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Atuação em diversas áreas do Direito, com profissionais experientes.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Transparência, ética e compromisso com resultados eficientes.
              </li>
            </ul>
            <p>
              Na Glauco Advocacia, priorizamos a confiança e a tranquilidade de nossos clientes. Conte com uma equipe comprometida com a sua defesa e com a busca das melhores soluções jurídicas.
            </p>
          </div>
        </div></SectionFadeIn>
      </div>
    </section>
  );
}
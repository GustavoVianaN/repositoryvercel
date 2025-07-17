'use client';
import React from 'react';
import './footer.css';
import SectionFadeIn from '../components/SectionFadeIn';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <SectionFadeIn>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Advocacia</h3>
                  <p>
                    Rua Exemplo, 100 <br />
                    Bairro Centro, Cidade - Estado <br />
                    CEP 12345-678 <br />
                    <br />
                    <strong>Telefone:</strong> +55 (11) 1234-5678 <br />
                    <strong>Email:</strong> contato@advocacia.com.br <br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="youtube">
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="reddit">
                      <i className="bi bi-reddit"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Links Úteis</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Início</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Sobre Nós</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Eventos</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Galeria</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Nossos Serviços</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Consultoria Jurídica</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Defesa Trabalhista</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Direito Civil</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Direito Empresarial</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Atendimento Personalizado</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Newsletter</h4>
                <p>
                  Inscreva-se para receber as últimas novidades e atualizações jurídicas.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" placeholder="Seu email" />
                  <input type="submit" value="Assinar" />
                </form>
              </div>
            </div>
          </SectionFadeIn>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>Advocacia</span>
            </strong>{' '}
            - Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}

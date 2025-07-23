import React from 'react';
import './WhatsappButton.css';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/554195731633"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
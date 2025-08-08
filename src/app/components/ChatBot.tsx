'use client';
import { useState } from 'react';
import './chatbot.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão flutuante com imagem e texto */}
      <button
        className="chatbot-button"
        onClick={toggleChat}
        aria-label="Abrir chat com advogado"
      >
        <span className="chatbot-text">Atendimento Online...</span>
        <img
          src="/assets/images/icon_chat.png" // caminho da imagem
          alt="Atendente"
          className="chatbot-icon"
        />
      </button>

      {/* Janela do Chat */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Chat com Advogado
            <span
              className="chatbot-close"
              onClick={toggleChat}
              role="button"
              aria-label="Fechar chat"
            >
              ✖
            </span>
          </div>

          <div className="chatbot-messages">
            <p>Olá! Como posso ajudar?</p>
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
            />
            <button>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}

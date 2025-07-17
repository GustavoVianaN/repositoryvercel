import React from 'react';
import './herobtn.css';

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const handleScrollTo = (section: string) => {
    // Aqui você pode implementar o scroll suave se quiser
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${
        name.includes('book') ? 'ms-4' : undefined
      }`}
    >
      {name}
    </a>
  );
}

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
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const whatsappNumber = "554195731633";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${
        name.includes('book') ? 'ms-4' : undefined
      }`}
    >
      {name}
    </a>
  );
}

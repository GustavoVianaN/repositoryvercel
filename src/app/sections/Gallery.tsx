"use client";

import React, { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import GalleryItem from "../components/GalleryItem";
import Preloader from "../components/PreLoader";
import SectionFadeIn from "../components/SectionFadeIn";

import "glightbox/dist/css/glightbox.min.css";

export default function Gallery() {
  const [GLightbox, setGLightbox] = useState<any>(null);
  const [images, setImages] = useState<{ id: number; image: string }[]>([]);

  // Importa GLightbox dinamicamente só no client
  useEffect(() => {
    import("glightbox").then((mod) => setGLightbox(() => mod.default));
  }, []);

  // Busca imagens da API só no client
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((e) => console.log(e.message));
  }, []);

  // Inicializa GLightbox só quando ele estiver carregado e imagens disponíveis
  useEffect(() => {
    if (!GLightbox || images.length === 0) return;

    const lightbox = GLightbox({
      selector: ".gallery-lightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, [GLightbox, images]);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Gallery"
          subtitle="Algumas fotos de nossos escritórios"
        />
      </div>

      <SectionFadeIn>
        <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row g-0">
            {images.length > 0 ? (
              images.map((image) => (
                <GalleryItem key={image.id} item={image} />
              ))
            ) : (
              <Preloader />
            )}
          </div>
        </div>
      </SectionFadeIn>
    </section>
  );
}

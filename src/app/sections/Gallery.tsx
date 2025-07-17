"use client";
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryItem from '../components/GalleryItem';
import Preloader from '../components/PreLoader';
import GLightbox from 'glightbox'; // <-- importe aqui!
import 'glightbox/dist/css/glightbox.min.css';
import SectionFadeIn from '../components/SectionFadeIn';
export default function Gallery() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/gallery')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(e => console.log(e.message));
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const lightbox = GLightbox({
        selector: '.gallery-lightbox',
      });
      return () => {
        lightbox.destroy();
      };
    }
  }, [images]);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Gallery"
          subtitle="Algumas fotos de nossos escritórios"
        />
      </div>
      <SectionFadeIn>      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {images.length > 0 ? (
            images.map((image: { id: number; image: string }) => (
              <GalleryItem key={image.id} item={image} />
            ))
          ) : (
            <Preloader />
          )}
        </div>
      </div></SectionFadeIn>
    </section>
  );
}
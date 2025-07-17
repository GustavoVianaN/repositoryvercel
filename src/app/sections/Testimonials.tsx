'use client';

import React, { useEffect, useState } from 'react';
import SectionFadeIn from '../components/SectionFadeIn';
import SectionTitle from '../components/SectionTitle';
import TestimonialsItem from '../components/TestimonialsItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import './testimonials.css';

interface Testimonial {
  id: number;
  content: string;
  avatar: string;
  client: string;
  position: string;
}

export default function Testimonials() {
  const [slides, setSlides] = useState<Testimonial[]>([]);

  const getTestimonialsData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`);
      const data = await res.json();
      setSlides(data);
    } catch (error: any) {
      console.error('Erro ao buscar depoimentos:', error.message);
    }
  };

  useEffect(() => {
    getTestimonialsData();
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Depoimentos"
          subtitle="O que dizem sobre nós"
        />

        <SectionFadeIn>
          <div data-aos="fade-up" data-aos-delay="100">
            <Swiper
              slidesPerView={'auto'}
              speed={600}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.testimonials-swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="testimonials-slider swiper-container"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <TestimonialsItem item={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonials-swiper-pagination" />
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}

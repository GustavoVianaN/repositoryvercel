"use client";

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './events.css';
import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventsItem from '../components/EventsItem';
import SectionFadeIn from '../components/SectionFadeIn';

export default function Events() {
    const [slides, setSlides] = useState<any | []>([]);

    const getEventsData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`)
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getEventsData();
    }, []);

    return (
        <section id="events" className="events">
            <div className="container" data-aos="fade-up">
                <SectionFadeIn>                <SectionTitle
                    title="Eventos"
                    subtitle="Participe de Nossos Eventos Jurídicos"
                />
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Swiper
                            spaceBetween={0}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            className="events-slider swiper-container"
                        >
                            {slides &&
                                slides.length > 0 &&
                                slides.map((slide: any) => (
                                    <SwiperSlide key={slide.id}>
                                        <EventsItem item={slide} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div></SectionFadeIn>
            </div>
        </section>
    );
}

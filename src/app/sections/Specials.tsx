'use client';

import React, { useState, useEffect } from 'react';
import './specials.css';
import { specialsFilters } from '../data/data';
import SectionTitle from '../components/SectionTitle';
import SpecialsItem from '../components/SpecialsItem';
import Preloader from '../components/PreLoader';
import SectionFadeIn from '../components/SectionFadeIn';

export default function Specials() {
    const [data, setData] = useState<any[]>([]);
    const [items, setItems] = useState<any[]>([]);
    const [activeId, setActiveId] = useState<number | null>(null);

    const getSpecialsData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/specials`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getSpecialsData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const initialized = data.map((item: any, index: number) => ({
                ...item,
                active: index === 0,
            }));
            setItems(initialized);
            setActiveId(initialized[0].id); // define o primeiro como ativo
        }
    }, [data]);

    const handleSpecialChange = (id: number) => {
        const updatedItems = items.map((item: any) => ({
            ...item,
            active: item.id === id,
        }));
        setItems(updatedItems);
        setActiveId(id); // define o id da aba ativa
    };

    return (
        <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
                <SectionFadeIn>
                    <SectionTitle title="Diferenciais" subtitle="Conheça Nossos Diferenciais" />
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                {specialsFilters.map(filter => (
                                    <li className="nav-item" key={filter.id}>
                                        <a
                                            className={`nav-link ${activeId === filter.id ? 'active show' : ''}`}
                                            onClick={() => handleSpecialChange(filter.id)}
                                        >
                                            {filter.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-9 mt-4 mt-lg-0">
                            <div className="tab-content">
                                {!items ? (
                                    <Preloader />
                                ) : items.length > 0 ? (
                                    items.map((item: any) =>
                                        <SpecialsItem key={item.id} item={item} />
                                    )
                                ) : (
                                    <Preloader />
                                )}
                            </div>
                        </div>
                    </div>
                </SectionFadeIn>
            </div>
        </section>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import './topBar.css';

export default function TopBar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpeza do event listener ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    return (
        <div
            id="topbar"
            className={`d-flex align-items-center fixed-top ${scroll > 100 ? 'topbar-scrolled' : undefined
                }`}
        >
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-phone me-2"></i>  {/* espaço depois do ícone */}
                    <span>(41) 99573-1633</span>
                    <span className="ms-2">| Curitiba, Paraná</span> {/* espaço antes da cidade */}
                </div>

                <div className="languages d-md-flex align-items-center ms-4">
                    <ul>
                        <li><a href="#">PT</a></li>
                        <li><a href="#">EN</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

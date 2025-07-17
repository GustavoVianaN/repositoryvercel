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
                    <i className="bi bi-phone d-flex align-items-center"></i>
                    <span>+1 5589 55488 55</span>
                    <span>Mon-Sat: 11AM - 23PM</span>
                </div>
                <div className="languages d-md-flex align-items-center">
                    <ul>
                        <li><a href="#">PT</a></li>
                        <li><a href="#">EN</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

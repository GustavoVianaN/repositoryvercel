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
            <div className="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center py-2">
                <div className="contact-info d-flex flex-column flex-sm-row align-items-center gap-3 mb-2 mb-md-0">
                    <i className="bi bi-phone me-2"></i>
                    <span>(41) 99999-9999 Curitiba | PR</span>
                </div>
                <div className="languages d-flex align-items-center">
                    <ul className="list-unstyled d-flex gap-3 mb-0">
                        <li><a href="#" className="text-decoration-none">PT</a></li>
                        <li><a href="#" className="text-decoration-none">EN</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );

}

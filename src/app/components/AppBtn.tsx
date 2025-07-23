import React, { useState, useEffect } from 'react';
import './appBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';

export default function AppBtn({ name }: { name: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button className="app-btn" type="button" aria-label={name}>
            <span className="app-btn-text">{name}</span>
            {mounted && (
                <FontAwesomeIcon
                    icon={faWhatsapp as any}
                    className="app-btn-icon"
                    aria-hidden="true"
                    focusable="false"
                />
            )}
        </button>
    );
}

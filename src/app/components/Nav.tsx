import React, { useEffect, useState } from "react";
import './nav.css';
import { useRouter, usePathname } from 'next/navigation';

const navs = [
    { id: 1, name: 'Home', target: 'hero', active: true },
    { id: 2, name: 'About', target: 'about', active: false },
    { id: 3, name: 'Menu', target: 'menu', active: false },
    { id: 4, name: 'Specials', target: 'specials', active: false },
    { id: 5, name: 'Events', target: 'events', active: false },
    { id: 6, name: 'Chefs', target: 'chefs', active: false },
    { id: 7, name: 'Gallery', target: 'gallery', active: false },
    { id: 8, name: 'Contact', target: 'contact', active: false },
];

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();
    const [navList, setNavList] = useState(navs);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });

        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);


    const handleScrollTo = (section: string) => {
        let header: HTMLElement = document.querySelector("#header")!;
        let offset = header.offsetHeight;
        let targetEl: HTMLElement = document.querySelector("#" + section)!;
        if (pathname === "/") {
            let elementPosition = targetEl.offsetTop;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        } else {
            router.push('/#' + section);
        }
    };

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleNavActive = () => {
        let position = scroll + 200;
        // nav add and remove class active
        setNavList(navList.map(nav => {
            nav.active = false;
            let targetSection: HTMLElement = document.querySelector(
                '#' + nav.target
            )!;

            if (
                targetSection &&
                position >= targetSection.offsetTop &&
                position <= targetSection.offsetTop + targetSection.offsetHeight
            ) {
                nav.active = true;
            }
            return nav;
        }));
    };

    useEffect(() => {
        handleNavActive();
    }, [scroll]);

    return (
        <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : undefined}`}
        >
            <ul>
                {navList.map(nav => (
                    <li key={nav.id} className={`nav-link scrollto ${nav.active ? 'active' : undefined}`}>
                        <a onClick={() => handleScrollTo(nav.target)}>
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ) : (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={handleToggleMenu}></i>
        </nav>
    );
}

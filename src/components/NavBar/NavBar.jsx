import React, { useEffect, useState } from 'react';
import './navbar.scss';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#mainpage" className="brand" onClick={closeMenu}>
                    <span className="brand__prompt">~/</span>
                    <span className="brand__name">cristopher</span>
                    <span className="brand__cursor">_</span>
                </a>

                <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`}>
                    <a href="#aboutme" onClick={closeMenu}>About</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#resume" onClick={closeMenu}>Resume</a>
                    <a
                        href="assets/resume.pdf"
                        download="CrisSoto.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav__cta"
                        onClick={closeMenu}
                    >
                        Resume.pdf
                    </a>
                </nav>

                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default NavBar;

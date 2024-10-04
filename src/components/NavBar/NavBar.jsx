import React, { useState } from 'react';
import './navbar.scss';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>

                <div className='left'>
                    <a href="#mainpage" className='name'>
                        Cristopher Soto 
                    </a>
                </div>
                <div className={`right ${isMenuOpen ? 'active' : ''}`}>
                    <div className='titles'>
                        <a href="#aboutme" onClick={() => setIsMenuOpen(false)}>
                            About Me
                        </a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                            Projects 
                        </a>
                        <a href="#resume" onClick={() => setIsMenuOpen(false)}>
                            Resume
                        </a>
                    </div>
                </div>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
    );
}

export default NavBar;

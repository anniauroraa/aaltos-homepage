import React, { useState } from "react";

export default function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <button
                className="hamburger"
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {menuOpen && (
                <div className="mobileMenu">
                <a href="#contact">Tilaa meidät</a>
                <a href="#members">Bändijäsenet</a>
                <div className="mobileIcons">
                    <a href="https://www.instagram.com/aaltosband/">
                    <img src="/src/assets/instagram-icon-red.svg" alt="Instagram icon" className="icon"/>
                    </a>
                    <a href="mailto:aaltosband@gmail.com">
                    <img src="/src/assets/email-icon-red.svg" alt="Email icon" className="icon"/>
                    </a>
                </div>
                </div>
            )}
        </>
    );
};
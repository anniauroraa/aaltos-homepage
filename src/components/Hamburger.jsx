import React, { useState } from "react";

import { ContactLink } from "./ContactLink.jsx"

export function Hamburger() {
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
                    <a href="#tilaa">Tilaa meidät</a>
                    <a href="#jasenet">Bändijäsenet</a>
                    <div className="mobileIcons">
                        <ContactLink
                            href="https://www.instagram.com/aaltosband/"
                            icon="/src/assets/instagram-icon-red.svg"
                            aria-label="Instagram"
                            alt="Instagram icon"
                            size="small"
                        />
                        <ContactLink
                            href="mailto:aaltosband@gmail.com"
                            icon="/src/assets/email-icon-red.svg"
                            aria-label="Email"
                            alt="Email icon"
                            size="small"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
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
                            type={"email"}
                            color="red"
                            iconHeight={24}
                        />
                        <ContactLink 
                            type={"instagram"}
                            color="red"
                            iconHeight={24}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
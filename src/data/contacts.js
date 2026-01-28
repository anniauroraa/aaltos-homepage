import instagramRed from "/src/assets/instagram-icon-red.svg"
import instagramWhite from "/src/assets/instagram-icon-white.svg"
import emailRed from "/src/assets/email-icon-red.svg"
import emailWhite from "/src/assets/email-icon-white.svg"

const contacts = {
  instagram: {
    href: "https://www.instagram.com/aaltosband/",
    ariaLabel: "Instagram",
    alt: "Instagram icon",
    icons: {
      red: instagramRed,
      white: instagramWhite,
    },
  },
  email: {
    href: "mailto:aaltosband@gmail.com",
    ariaLabel: "Email",
    alt: "Email icon",
    icons: {
      red: emailRed,
      white: emailWhite,
    },
  },
};

export default contacts;

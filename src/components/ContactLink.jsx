import contacts from "../data/contacts.js";

/* common template for icons with optional text */
export const ContactLink = ({ 
  type,
  color = "red" | "white", 
  iconWidth,
  iconHeight,
  children 
}) => {
  const contact = contacts[type];
  const iconSrc = contact.icons[color];

  return (
    <a 
      href={contact.href} 
      aria-label={contact.ariaLabel} 
      className={`contactLink ${color}`}
    >
      <img 
        src={iconSrc} 
        alt={contact.alt}
        style={{ width:iconWidth, height: iconHeight }}
      />
      {children && <span className="contactText">{children}</span>}
    </a>
  );
};


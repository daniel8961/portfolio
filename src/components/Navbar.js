import colors from "../style/colors";
import { useState } from "react";
// primary text: 
const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 24px',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: colors.footerBg,
      color: colors.white,
    },
    nav: {
      display: 'flex',
      gap: '24px',
      fontSize: '14px',
      fontWeight: '500',
    },
    navLink: {
      color: colors.footerText,
      textDecoration: 'none',
      padding: '6px 10px',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
    }
  };

  function NavLink({ href, children }) {
    const [hover, setHover] = useState(false);

    return (
      <a
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.navLink,
          color: hover ? colors.highlight : colors.footerText,
          backgroundColor: hover ? 'rgba(255,255,255,0.1)' : 'transparent',
        }}
        >
          {children}
      </a>
    );
  }
  
  export default function Navbar() {
    return (
      <header style={styles.header}>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Daniel Lee</div>
        <nav style={styles.nav}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">My Projects</NavLink>
          <NavLink href="#news">Procrastinators</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </header>
    );
  }
  
import { useState, useEffect, useRef } from "react";
import colors from "../style/colors";

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: colors.footerBg,
    color: colors.white,
    position: 'sticky',
    top: 0,
    zIndex: 50,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '64px',
    right: '24px',
    backgroundColor: colors.footerBg,
    padding: '12px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  hamburger: {
    fontSize: '26px',
    cursor: 'pointer',
    display: 'none',
    userSelect: 'none',
  }
};

function NavLink({ href, children, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Update mobile flag on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header style={styles.header}>
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Daniel Lee</div>

      {isMobile ? (
        <div ref={navRef}>
          <div style={{ ...styles.hamburger, display: 'block' }} onClick={() => setMenuOpen(!menuOpen)}>
            &#9776; {/* Unicode hamburger icon */}
          </div>
          {menuOpen && (
            <nav style={styles.mobileNav}>
              <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink href="#projects" onClick={() => setMenuOpen(false)}>My Projects</NavLink>
              <NavLink href="#news" onClick={() => setMenuOpen(false)}>Procrastinators</NavLink>
              <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </nav>
          )}
        </div>
      ) : (
        <nav style={styles.nav}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">My Projects</NavLink>
          <NavLink href="#news">Procrastinators</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

import colors from "../style/colors";
import { useState, useEffect } from 'react';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      width: '100%',
      padding: isMobile ? '60px 24px' : '60px 24px',
      backgroundColor: colors.backgroundAlt,
      boxSizing: 'border-box',
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' : 'flex-start',
      gap: '40px',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '1100px',
      padding: '5% 5%',
      margin: '0 auto',
      boxSizing: 'border-box',
    },
    left: {
      flex: '0 0 auto',
      textAlign: isMobile ? 'center' : 'left',
    },
    right: {
      flex: '1',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      width: '100%',
    },
    category: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    category_title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: colors.textMain,
      textAlign: isMobile ? 'center' : 'left',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: colors.textMain,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      width: '100%',
    },
    card: {
      padding: '16px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column'
    },
    card_title: {
      fontWeight: 'bold',
      marginBottom: '8px',
      color: colors.textMain
    },
    card_detail: {
      fontSize: '14px',
      color: colors.textSub
    }
  };

  function HoverCard({ title, detail, link }) {
    const [hover, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const cardStyle = {
      ...styles.card,
      transform: hover ? 'translateY(-5px)' : 'none',
      boxShadow: hover
        ? '0 8px 16px rgba(0,0,0,0.2)'
        : '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease-in-out',
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
    };
  
    const handleClick = (e) => {
      if (isMobile && !hover) {
        e.preventDefault(); // Prevent link on first tap
        setHover(true);
        setTimeout(() => window.location.href = link, 400); // Delay navigation slightly
      }
    };
  
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        onMouseEnter={!isMobile ? () => setHover(true) : undefined}
        onMouseLeave={!isMobile ? () => setHover(false) : undefined}
        onClick={handleClick}
      >
        <div style={styles.card_title}>{title}</div>
        <div style={styles.card_detail}>{detail}</div>
      </a>
    );
  }
  

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.content}>
        <div style={styles.left}>
          <h2 style={styles.heading}>Projects</h2>
        </div>
        <div style={styles.right}>
          {/* Cybersecurity Projects */}
          <div style={styles.category}>
            <h3 style={styles.category_title}>Cybersecurity</h3>
            <div style={styles.grid}>
              <HoverCard
                title="Keylogger Security Analysis"
                detail="Python-based keylogger for ethical testing and input monitoring research."
                link="https://github.com/daniel8961/keylogger"
              />
              <HoverCard
                title="Penetration Testing Report"
                detail="Capture-the-Flag-style pentest report documenting XSS, SQLi, and privilege escalation findings."
                link="https://github.com/daniel8961/Rekall-Pentesting-Report"
              />
            </div>
          </div>

          {/* Software Dev Projects */}
          <div style={styles.category}>
            <h3 style={styles.category_title}>Software Development</h3>
            <div style={styles.grid}>
              <HoverCard
                title="API Development"
                detail="Express.js API backend powering a personal portfolio with secure routing and deployment config."
                link="https://github.com/daniel8961/API-Dev---danielthepotato.com"
              />
              <HoverCard
                title="Portfolio Website"
                detail="Modern, mobile-friendly personal portfolio built with ReactJS showcasing projects and contact info."
                link="https://github.com/daniel8961/portfolio"
              />
              <HoverCard
                title="Task Management App (Backend Focused)"
                detail="A backend-focused task manager using Node.js, Express, MongoDB, WebSocket, and JWT auth."
                link="https://github.com/daniel8961/Task-Management-Backend-Focused"
              />
              <HoverCard
                title="Financial Report Analyzer"
                detail="Python scripts for analyzing company financial reports with data visualization and insights."
                link="https://github.com/daniel8961/Financial-Report-Analysis"
              />
              <HoverCard
                title="Sliding Puzzle Game"
                detail="Simple JavaScript-based sliding puzzle game with interactive UI for practice and fun."
                link="https://github.com/daniel8961/Sliding-Puzzle-Game"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

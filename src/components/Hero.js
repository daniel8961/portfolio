import { useState, useEffect } from "react";
import colors from "../style/colors";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: isMobile ? '5% 5%' : '5% 5%',
      backgroundColor: colors.backgroundAlt,
      overflowX: 'hidden',
      overflow: 'hidden',
      boxSizing: 'border-box',
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'space-between',
      textAlign: isMobile ? 'center' : 'left',
      width: '100%',
      maxWidth: '1100px',
      marginTop: isMobile ? '8vh' : '20vh',
      gap: '5%',
    },
    left: {
      flex: '0 0 300px',
      maxWidth: '300px',
      width: '100%',
    },
    daniel_photo: {
      width: '100%',
      height: 'auto',
      maxWidth: '300px',
      borderRadius: '30px',
    },
    right: {
      flex: 1,
      minWidth: 0,
    },
    heading: {
      fontSize: isMobile ? '32px' : '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: colors.textMain,
    },
    paragraph: {
      fontSize: isMobile ? '16px' : '20px',
      lineHeight: '1.6',
      color: colors.textSub,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.left}>
          <img src="/Daniel.jpg" type="image/jpg" style={styles.daniel_photo} />
        </div>
        <div style={styles.right}>
          <h1 style={styles.heading}>Hi, I'm Daniel</h1>
          <p style={styles.paragraph}>
            Cybersecurity Specialist with a software engineering background. I create secure tools, automate defenses, and solve real-world security challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

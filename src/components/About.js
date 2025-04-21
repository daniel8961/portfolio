import { useState, useEffect } from "react";
import colors from "../style/colors";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      width: '100vw',
      padding: isMobile ? '5% 5%' : '5% 5%',
      backgroundColor: colors.backgroundLight,
      boxSizing: 'border-box',
      overflowX: 'hidden',
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'center' : 'left',
      gap: '40px',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    left: {
      flex: '0 0 auto',
      minWidth: 0,
    },
    right: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: colors.textMain,
    },
    item: {
      color: colors.textSub,
      lineHeight: '1.6',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.content}>
        <div style={styles.left}>
          <h2 style={styles.heading}>About Me</h2>
        </div>
        <div style={styles.right}>
          <p style={styles.item}>
            <b>Daniel</b> is currently focused on <b>cybersecurity</b>, developing tools and conducting assessments to protect digital systems. His GitHub repositories showcase projects such as a keylogger for security analysis, a backend-focused task management system, and penetration testing reports, reflecting his practical skills in offensive and defensive security.
          </p>
          <p style={styles.item}>
            His professional journey began as a <b>Field Engineer</b> at WuFi, where he configured routers, switches, and access points for various client environments. He later served as the <b>System Administrator</b> at Care Plus Family Medicine, where he redesigned the clinic’s entire network infrastructure, conducted security audits, and managed both internal IT systems and public-facing websites.
          </p>
          <p style={styles.item}>
            Daniel recently completed a Cybersecurity Bootcamp at UT San Antonio, where he gained hands-on experience in penetration testing, system hardening, and network defense. He is currently preparing for the <b>CompTIA Security+ certification</b> to further strengthen his foundational knowledge, with a long-term goal of earning the <b>GIAC GWEB certification</b> to specialize in web application security.
          </p>
        </div>
      </div>
    </section>
  );
}

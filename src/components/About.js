import colors from "../style/colors";

const styles = {
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      textAlign: 'left',
      padding: '5% 5%',   
      backgroundColor: colors.backgroundLight,                   
    }, 
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      flexWrap: 'wrap',
      width: '80%'
    },
    left: {
      flex: '0 0 30%',
      // minWidth: '200px'
    },
    right: {
      flex: '1',
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: colors.textMain
    },
    item: {
      color: colors.textSub
    }
  };
  
  export default function About() {
    return (
      <section id="about" style={styles.section}>
        <div style={styles.content}>
          <div style={styles.left}>
            <h2 style={styles.heading}>About Me</h2>
          </div>
          <div style={styles.right}>
            <p style={styles.item}>
              Daniel is currently focused on cybersecurity, developing tools and conducting assessments to protect digital systems. His GitHub repositories showcase projects such as a keylogger for security analysis, a backend-focused task management system, and penetration testing reports, reflecting his practical skills in offensive and defensive security.
            </p>
            <p style={styles.item}>
              His professional journey began as a Field Engineer at WuFi, where he configured routers, switches, and access points for various client environments. He later served as the System Administrator at Care Plus Family Medicine, where he redesigned the clinic’s entire network infrastructure, conducted security audits, and managed both internal IT systems and public-facing websites.
            </p>
            <p style={styles.item}>
            Daniel recently completed a Cybersecurity Bootcamp at UT San Antonio, where he gained hands-on experience in penetration testing, system hardening, and network defense. He is currently preparing for the CompTIA Security+ certification to further strengthen his foundational knowledge, with a long-term goal of earning the GIAC GWEB certification to specialize in web application security.
            </p>
          </div>
        </div>        
      </section>
    );
  }
  
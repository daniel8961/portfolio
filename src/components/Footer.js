import colors from "../style/colors";
const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '5% 5%',   
    backgroundColor: colors.footerBg,                   
  }, 
    footer: {
      color: colors.footerText,
      textAlign: 'left',
      padding: '20px',
      width: '80%'
    }
  };
  
  export default function Footer() {
    return (
      <section style={styles.section}>
        <footer style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Daniel Lee. Built with ReactJS. All rights reserved.</p>
        </footer>
      </section>
    );
  }
  
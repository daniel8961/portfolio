import colors from "../style/colors";
const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 5% 0 5%',
    backgroundColor: colors.backgroundAlt,

  },
  content: {
    width: '80%',
    marginTop: '20vh', // push content down a bit
    display: 'flex',
    // border: '1px solid black'
  },
  left: {
    width: '50%',
    height: 'auto',
    // border: '1px solid black'
  },
  daniel_photo: {
    width: '100%',
    borderRadius: '30px'
  },
  right: {
    marginLeft: '10%',
    // border: '1px solid black'
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: colors.textMain
  },
  paragraph: {
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#333',
    color: colors.textSub
  }
};

export default function Hero() {
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

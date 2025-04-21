const styles = {
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      textAlign: 'left',
      padding: '5% 5%', 
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
      gap: '12px'
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    item: {
      marginBottom: '8px'
    }
  };
  
  export default function Contact() {
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        alert('Copied!');
      });
    };
    
    return (
      <section id="contact" style={styles.section}>
        <div style={styles.content}>
          <div style={styles.left}>
            <h2 style={styles.heading}>Contact</h2>
          </div>
          <div style={styles.right}>
            <p style={styles.item}>
              <img src="/gmail_icon.png" alt="email" style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px' }} />&nbsp;
              <a href="mailto:daniellee8961@gmail.com" style={{ color: 'inherit', textDecoration: 'none',}} onClick={(e) => e.preventDefault()} >
                daniellee8961@gmail.com
              </a>&nbsp;
              <img 
                src="/copy_icon.png" 
                alt="copy" 
                title="copy" 
                onClick={() => copyToClipboard('daniellee8961@gmail.com')} 
                style={{ width: '18px', verticalAlign: 'middle', cursor: 'pointer'}} 
              />
            </p>

            <p style={styles.item}>
              <img src="/linkedin_icon.png" alt="linkedin profile" style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px' }} />&nbsp;
              <a href="https://www.linkedin.com/in/tsungtilee" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                View My Linkedin Profile
              </a>&nbsp;
              
              <img 
                src="/copy_icon.png" 
                alt="copy" 
                title="copy" 
                onClick={() => copyToClipboard('https://www.linkedin.com/in/tsungtilee')} 
                style={{ width: '18px', verticalAlign: 'middle', cursor: 'pointer'}} 
              />
            </p>
            <p style={styles.item}>
              <img src="/github_icon.png" alt="github repo" style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px' }} />&nbsp;
              <a href="https://github.com/daniel8961?tab=repositories" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                View my Projects in Github 
              </a>&nbsp;
              
              <img 
                src="/copy_icon.png" 
                alt="copy" 
                title="copy" 
                onClick={() => copyToClipboard('https://github.com/daniel8961?tab=repositories')} 
                style={{ width: '18px', verticalAlign: 'middle', cursor: 'pointer'}} 
              />
            </p>
            
          </div>
        </div>
      </section>
    );
  }
  
import { useEffect, useState } from 'react';
import colors from '../style/colors';

const containerStyle = {
  width: '80%',
  maxWidth: '600px',
  overflow: 'hidden',
  border: '3px solid',
  borderColor: colors.highlight,
  borderRadius: '10px',
  padding: '10px',
  background: `linear-gradient(135deg, ${colors.backgroundLight}, #ffffff)`,
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: colors.textMain,
  minHeight: '50px',
  textAlign: 'center',
  transition: 'opacity 0.5s ease-in-out',
  margin: '0 auto'
};

const footerStyle = {
  marginTop: '20px',
  fontSize: '0.8em',
  color: '#aaa',
  textAlign: 'center'
};

const styles = {
  section: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: colors.backgroundLight
  },
  news_ticker: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    margin: '0 auto',
    width: '80%'
  },
  top: {
    width: '100%'
  },
  bottom: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '16px',
    color: colors.accent,
    textAlign: 'center',
    letterSpacing: '0.5px'
  },
};

export default function NewsTicker() {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    fetch("https://api-of-list-of-encouraging-words.onrender.com/all")
      .then(res => res.json())
      .then(data => {
        setMessages(data.messages);
      })
      .catch(() => {
        setMessages(["Failed to load motivation!"]);
      });
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <section id='news' style={styles.section}>
      <div style={styles.news_ticker}>
        <div style={styles.top}>
          <h2 style={styles.heading}>Quote For the Day</h2>
        </div>
        <div style={styles.bottom}>
          <div
            style={{ ...containerStyle, opacity: fade ? 0 : 1 }}
          >
            {messages.length > 0 ? messages[index] : "Loading motivation..."}
          </div>
        </div>
      </div>
    </section>
  );
}

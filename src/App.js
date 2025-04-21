import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import NewsTicker from './components/NewsTicker';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Hero />
        <About />
        <Projects />
        <NewsTicker />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;


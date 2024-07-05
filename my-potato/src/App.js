import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ThreeDModels from './content/3d_models';
import HTMLWebsite from './content/html_website';
import RCCars from './content/rc_cars';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>This portfolio documents my personal growth and interests</p>
      </header>
      <div className="menu-toggle">☰</div>
      <div className="main-content">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <section id="home">
            <h2>Brief Intro</h2>
            <div className="party">
              <div className="report">
                <h3>Purpose of This Page</h3>
                <p>This is my portfolio. You can see my interests and the learning progress in the following. Just started learning 3D drawing using TinkerCAD. Planning on printing the RC Car chassis using 3D printing.</p>
              </div>
            </div>
            <div className="party">
              <div className="report">
                <h3>Who I Am</h3>
                <p>My name is Daniel (Tsung Ti) Lee. Graduated with a Bachelor in Computer Science. I specialize in Web SPA (Single Page Application) using React.js. Currently working as System Administrator in Atlanta, GA.</p>
                <p>I am currently exploring my interests in other fields, with a strong passion for 3D Design. I enjoy designing practical items for daily life to improve convenience and optimize room space usage, especially in limited areas. My self-taught journey has enabled me to create efficient designs that maximize space. I aspire to make my designs attractive and inspiring to others, encouraging them to pursue their own creative ideas and dreams.</p>
              </div>
            </div>
          </section>
          <section id="models">
            <h2>3D Models</h2>
            <ThreeDModels />
          </section>
          <section id="website">
            <h2>How to Upload Your HTML Website to the Internet (No CMS)</h2>
            <HTMLWebsite />
          </section>
          <section id="rc-car">
            <h2>Learn RC Car as A Beginner</h2>
            <RCCars />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

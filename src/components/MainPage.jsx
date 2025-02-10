import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MainPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>In Construction, Inc</h1>
        <p className="subtitle">Transforming Local Community Communication</p>
        <nav className="navigation">
          <Link to="/logs" className="nav-link">View Meeting Logs 📝</Link>
          <Link to="/about" className="nav-link">About Us 👥</Link>
          <a
            href="https://github.com/christopherk26/InConstruction4800"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository Link 💻
          </a>
        </nav>
      </header>

      <main className="main-content">
        <section className="overview-section">
          <h2>Project Overview 🚧 🏗️</h2>
          <div className="content-card">
            <p>
              The primary product of In Construction, inc is the Town Hall application.
              Town Hall is an innovative digital platform designed to revolutionize local
              community interaction by creating a verified, transparent, and engaging
              communication ecosystem. Inspired by social media platforms like Reddit,
              but fundamentally different in its approach, Town Hall addresses critical
              gaps in modern local communication by providing a robust, verified, and
              geographically-specific communication channel.
            </p>
            <p>
              The goal is to create a LinkedIn-style "professional environment" but
              with the Reddit community approach.
            </p>
          </div>
        </section>

        <section className="vision-section">
          <h2>Vision Statement 🚧 🏗️</h2>
          <div className="content-card">
            <p>
              Town Hall aims to reimagine local communication by creating a trusted,
              verified, and transparent platform that reconnects communities, empowers
              citizens, and revitalizes the social fabric of modern urban and suburban life.
            </p>
            <p>
              Developed to address the fundamental breakdown of local communication in
              the digital age, and the lack of a centralized and government-sponsored
              source of two-way communication between citizens and leaders.
            </p>
            <p>
              With the post-COVID era of the world having everything virtual and
              convenient, it is time for local governments to also follow suit.
            </p>
          </div>
        </section>

        <section className="features-section">
          <h2>Key Features 🚧 🏗️</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Verified Communication</h3>
              <p>Secure and authenticated platform for community dialogue</p>
            </div>
            <div className="feature-card">
              <h3>Geographic Focus</h3>
              <p>Location-specific content and community engagement</p>
            </div>
            <div className="feature-card">
              <h3>Professional Environment</h3>
              <p>LinkedIn-style professionalism with Reddit's community approach</p>
            </div>
            <div className="feature-card">
              <h3>Government Integration</h3>
              <p>Direct connection with local government services</p>
            </div>
          </div>
        </section>
      </main>
      <div className="team-members">
        Website made by Kurdoghlian
      </div>
    </div>
  );
}

export default MainPage;
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function AboutUs() {
  const teamMembers = [
    {
      name: "Ali M",
      role: "Team Member",
      description: "Software Engineering Student at Cal Poly Pomona"
    },
    {
      name: "Christopher K",
      role: "C.E.O.",
      description: "Software Engineering Student at Cal Poly Pomona"
    },
    {
      name: "Kevin T",
      role: "Team Member",
      description: "Software Engineering Student at Cal Poly Pomona"
    },
    {
      name: "Nicolas E",
      role: "Team Member",
      description: "Software Engineering Student at Cal Poly Pomona"
    },
    {
      name: "Ramsey Foster",
      role: "Team Member",
      description: "Software Engineering Student at Cal Poly Pomona"
    },
    {
      name: "Garrett M",
      role: "Team Member",
      description: "Software Engineering Student at Cal Poly Pomona"
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>About Us 👥</h1>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home 🏠</Link>
          <Link to="/logs" className="nav-link">Meeting Logs 📝</Link>
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
        <section className="team-section">
          <h2>Our Team 🚧 🏗️</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Project Details 🚧 🏗️</h2>
          <div className="content-card">
            <h3>Town Hall</h3>
            <p>A community-focused platform designed to bridge the gap between local government and citizens</p>
            <p>Course Project - Spring 2025</p>
          </div>
        </section>

        <section className="course-section">
          <h2>Course Information 🚧 🏗️</h2>
          <div className="content-card">
            <h3>CS4800 - Software Engineering. This is not a real company.</h3>
            <p>Spring 2025</p>
            <p>Professor Rodriguez</p>
            <p>California State Polytechnic University, Pomona</p>
          </div>
        </section>
      </main>
      <div className="team-members">
          Website made by Kurdoghlian 🚧 🏗️
      </div>
    </div>
  );
}

export default AboutUs;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Team Meeting Logs</h1>
        <p>Software Engineering Project - Spring 2025</p>
      </header>

      <main>
        <article className="meeting-log">
          <h2>Meeting - February 1, 2025</h2>
          <p className="meeting-type">Sprint Planning</p>
          
          <section>
            <h3>Progress Updates</h3>
            <div className="member-update">
              <p className="member-name">Team Member 1:</p>
              <ul>
                <li>Set up AWS Amplify project</li>
                <li>Created initial repository</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h3>Tomorrow's Tasks</h3>
            <div className="member-update">
              <p className="member-name">Team Member 1:</p>
              <ul>
                <li>Add more meeting logs</li>
                <li>Style the website</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h3>Notes & Action Items</h3>
            <ul>
              <li>Next meeting: February 2, 2025</li>
              <li>Need to define project scope</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  )
}

export default App
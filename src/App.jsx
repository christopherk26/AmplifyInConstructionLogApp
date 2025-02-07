import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Team "In Construction" 🚧 🏗️ Meeting Logs</h1>
        <p className="subtitle">CS4800 Software Engineering - Professor Rodriguez</p>
        <div className="team-members">
          Team Members: Nico, Ramsey, Christopher, Ali, and Garrett.
        </div>
        <div className="team-members">
          Website made by Kurdoghlian. Meetings are at 9:00 PM.
        </div>
      </header>

      <main className="logs-grid">

        {/* Meeting Log fwb 6 */}
        <article className="meeting-log">
          <h2>Meeting - February 6, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>GitHub worked out</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Work on SRS</li>
                <li>Talk to professor</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Learned git and github</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Talk to professor and ask questions</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Figured out how to use basics of GitHub and VSCode</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize proposal</li>
                <li>Hear from professor</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Set up GitHub repository in VS</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Prepare questions for professor</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Refreshed myself on GitHub commands</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look over proposal</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Brushed up on GitHub</li>
                <li>Setup git, Node.js, and npm on VSCode</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize proposal</li>
                <li>Prepare questions for professor</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Team has successfully set up GitHub environments</li>
                <li>Meeting with professor planned for tomorrow</li>
                <li>Proposal needs to be finalized</li>
                <li>Team members to prepare questions for professor</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting 3 start Log */}
        <article className="meeting-log">
          <h2>Meeting - February 5, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Wrote the Friday proposal with the team</li>
                <li>Reviewed git</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Review more git</li>
                <li>Work on the proposal and SRS</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Started proposal for Friday</li>
                <li>Looking into git</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Researched some of React tech stack</li>
                <li>Learn how to use git/github</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Read into git and how to use it as a team</li>
                <li>Started writing for the proposal and SRS</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Set up GitHub in Visual Studio Code</li>
                <li>Looked into Node.js</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Write for the proposal</li>
                <li>Look for questions to ask professor</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Finalize writing Proposal</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into git and setup for VSCode</li>
              </ul>
            </div>
          </section>


          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Team is working on Friday's proposal</li>
                <li>Everyone should familiarize themselves with git/GitHub</li>
                <li>SRS (Software Requirements Specification) needs to be worked on</li>
                <li>Tech stack research (React, Node.js) is ongoing</li>
              </ul>
            </div>
          </section>
        </article>
        {/* Meeting 4 end log */}

        {/* Meeting 3 */}
        <article className="meeting-log">
          <h2>Meeting - February 4, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into tech stack and thought of ideas</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine idea with SRS</li>
                <li>Start working on SRS and proposal</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Thought about ideas for the proposal</li>
                <li>Looked into potential tech stack software</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue exploring proposal ideas</li>
                <li>Further research tech stack options</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into an idea of project</li>
                <li>Considered tech stack implementation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue exploring tech stack</li>
                <li>Develop project implementation strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into SRS formats</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Examine functional aspects of the idea</li>
                <li>Explore non-functional aspects of the project</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into project ideas</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Review user requirement specifications</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Team is focusing on developing project proposal</li>
                <li>SRS (Software Requirements Specification) is a key priority</li>
                <li>Continued exploration of tech stack and project ideas</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting 2 */}
        <article className="meeting-log">
          <h2>Meeting - February 3, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into tech stack and thought of ideas</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine idea with SRS</li>
                <li>Start working on SRS and proposal</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Thought about ideas for the proposal</li>
                <li>Looked into potential tech stack software</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue exploring proposal ideas</li>
                <li>Further research tech stack options</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into an idea of project</li>
                <li>Considered tech stack implementation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue exploring tech stack</li>
                <li>Develop project implementation strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into SRS formats</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Examine functional aspects of the idea</li>
                <li>Explore non-functional aspects of the project</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into project ideas</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Review user requirement specifications</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Team is focusing on developing project proposal</li>
                <li>SRS (Software Requirements Specification) is a key priority</li>
                <li>Continued exploration of tech stack and project ideas</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting 1 */}
        <article className="meeting-log">
          <h2>Meeting - February 2, 2025</h2>

          <section>
            <h3>Nico</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Created Google doc for the tech stack</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into the SRS</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Made few tech stack layouts</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into Firebase</li>
                <li>Get an understanding of React</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Made the website for the meeting logs</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into Flutter</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Contributed to a meaningful Scrum meeting</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into Flutter</li>
                <li>Look into Firebase</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>No tasks reported for today</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into front end of React</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Multiple team members will be exploring Flutter and Firebase</li>
                <li>React learning is a priority for some team members</li>
                <li>SRS documentation needs to be reviewed</li>
              </ul>
            </div>
          </section>
        </article>
        {/* Meeting 1 end */}

      </main>
    </div>
  )
}

export default App
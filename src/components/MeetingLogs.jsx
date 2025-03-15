import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>"In Construction" Inc. Meeting Logs</h1>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home 🏠</Link>
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
        <div className="team-members">
          Meetings are at 9:00 PM.
        </div>
      </header>

      <main className="logs-grid">

        {/* Meeting Log - March 14, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 14, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Recent Achievements:</p>
              <ul>
                <li>Completed multiple key pages in the last week:
                  <ul>
                    <li>Edit profile page</li>
                    <li>Communities page</li>
                    <li>Add community page</li>
                    <li>Search communities page</li>
                    <li>Community feed page</li>
                  </ul>
                </li>
                <li>Created comprehensive to-do list for the team</li>
                <li>Developed strategic approach to team collaboration</li>
                <li>Provided guidance on understanding codebase</li>
                <li>Introduced Git version control best practices</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Execute team to-do list</li>
                <li>Collaborate with subteams on:
                  <ul>
                    <li>Firebase functions for user authentication</li>
                    <li>Firebase functions for community authentication</li>
                    <li>Settings page development</li>
                    <li>Notifications implementation</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Working on Firebase functions for authentication</li>
                <li>Debugging internal errors</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase authentication function development</li>
                <li>Resolve and document debugging findings</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Reviewed project progress and current state</li>
                <li>Began working on the website's settings tab</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue developing settings tab</li>
                <li>Deepen understanding of project architecture</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Created display for notifications</li>
                <li>Worked on fixing notification structure</li>
                <li>Researched notification implementation strategies</li>
              </ul>
            </div>
          
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>

                <li>Continued work on settings and notifications</li>
                <li>Focus on team collaboration and codebase understanding</li>

              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - March 6-7, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 6-7, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Project Structure Highlights:</p>
              <ul>
                <li>Developed comprehensive project structure</li>
                <li>Created robust authentication flow</li>
                <li>Implemented key directories:
                  <ul>
                    <li>Auth pages (login, signup, authenticate)</li>
                    <li>Communities management</li>
                    <li>Dashboard implementation</li>
                    <li>Services and models</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Key Implementation Areas:</p>
              <ul>
                <li>Login page development</li>
                <li>Dashboard logic creation</li>
                <li>Communities page implementation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas and Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Strategic Breakthrough:</p>
              <ul>
                <li>Developed a "10,000 IQ" scalable strategy</li>
                <li>Leveraging new login/signup/dashboard foundation</li>
                <li>Creating a reliable and extensible architectural approach</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Strategic Highlights:</p>
              <ul>
                <li>Focused on long-term scalability</li>
                <li>Building on robust authentication infrastructure</li>
                <li>Implementing flexible system architecture</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Continued focus on project scalability</li>
                <li>Leveraging new authentication and dashboard foundation</li>
                <li>Ongoing development of modular project structure</li>
                <li>Implementing innovative architectural strategies</li>
              </ul>
            </div>
          </section>
        </article>



        {/* Meeting Log - March 4, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 4, 2025</h2>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued working on login page</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete login page development</li>
                <li>Refine login functionality</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Prepared to work on diagram with Chris</li>
                <li>Investigating data object formation in NoSQL database</li>
                <li>Exploring methods to incorporate functions within database objects</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue work on architecture diagram</li>
                <li>Develop data object strategies</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued work on Firebase admin script</li>
                <li>Began developing login page and authentication</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue login page development</li>
                <li>Refine Firebase admin script</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on Figma design</li>
                <li>Continued working on mobile app section</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete mobile app Figma design</li>
                <li>Refine UI elements</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Deployed app with Firebase hosting</li>
                <li>Provided team with forward-looking plan</li>
                <li>Prepared to work on architecture diagram with Nicolas</li>
                <li>Planned to investigate file structure for entities</li>
                <li>Aimed to understand dynamic routing [id]</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue architecture diagram development</li>
                <li>Explore entity file structure</li>
                <li>Dive deeper into dynamic routing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Finalized all navigation views on Figma</li>
                <li>Completed mobile app subsections</li>
                <li>Began porting to web prototype</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue web prototype development</li>
                <li>Refine navigation views</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing app deployment and hosting</li>
                <li>Continued login page and authentication development</li>
                <li>Architecture diagram and entity structure investigation</li>
                <li>Figma design and prototype progression</li>
                <li>Dynamic routing exploration</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - March 2, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 2, 2025</h2>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Learning Firebase through hands-on experience</li>
                <li>Creating a login page</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase learning</li>
                <li>Develop login page functionality</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on Firebase admin script</li>
                <li>Attempted to get demo script working</li>
                <li>Started creating a login authentication page</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase admin script development</li>
                <li>Refine login authentication page</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on UML diagram</li>
                <li>Prepared to collaborate with Chris on architecture diagram</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue UML development</li>
                <li>Work on architecture diagram with Christopher</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Prepared to demonstrate database demo</li>
                <li>Shared database demo link: https://cs-4800-in-construction-63b73.web.app/databaseNoAPIrouting</li>
                <li>Planned to work on architecture diagram with Nicolas</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize architecture diagram with Nicolas</li>
                <li>Review database demo feedback</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Database demo presentation</li>
                <li>Ongoing login page development</li>
                <li>UML and architecture diagram work</li>
                <li>Firebase admin script progress</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - February 27, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - February 27, 2025</h2>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Made verification script more robust</li>
                <li>Researched Firebase functions for server-side code execution</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue improving verification script</li>
                <li>Further investigate server-side Firebase functions</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Wrote a script for Firebase admin</li>
                <li>Worked on getting the demo working for Firebase admin</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase admin script development</li>
                <li>Refine demo implementation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Finished search bar design for mobile app</li>
                <li>Continued mobile app design work</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue mobile app design</li>
                <li>Refine search bar and other UI elements</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing Firebase admin and verification script development</li>
                <li>Mobile app design progression</li>
                <li>Continued research on Firebase functions</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - February 24, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - February 24, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Shared Firestore implementation files</li>
                <li>Working with Nicolas on updated UML and ER diagrams</li>
                <li>Noted front-end team is progressing well</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Backend Team Action Items:</p>
              <ul>
                <li>Investigate Firebase integration with Next.js</li>
                <li>Research API routing</li>
                <li>Understand dynamic pages in Next.js</li>
                <li>Explore Firestore rules configuration</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue UML and ER diagram development</li>
                <li>Support backend team research</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey and Garrett</h3>
            <div className="member-update">
              <p className="member-name">Research Focus:</p>
              <ul>
                <li>Understand Firebase integration with Next.js</li>
                <li>Explore API routing mechanisms</li>
                <li>Learn about dynamic pages in Next.js</li>
                <li>Investigate Firestore rules and configuration</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Action Items:</p>
              <ul>
                <li>Review Christopher's Firestore implementation</li>
                <li>Prepare comprehensive report on findings</li>
                <li>Develop integration strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas and Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Creating updated UML diagram</li>
                <li>Developing new ER diagram</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize UML and ER diagrams</li>
                <li>Prepare documentation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing Next.js and Firebase integration research</li>
                <li>UML and ER diagram development</li>
                <li>Firestore implementation and configuration</li>
                <li>Continued technical investigation</li>
              </ul>
            </div>
          </section>
        </article>



        {/* Meeting Log - February 23, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - February 23, 2025</h2>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Started designing Mobile UI</li>
                <li>Continued Mobile UI design work</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Mobile UI design</li>
                <li>Refine mobile interface elements</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued the verification code development</li>
                <li>Implementing verification for communities and addresses</li>
                <li>Working on system to accept various documents</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue verification code refinement</li>
                <li>Develop comprehensive verification system</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Investigated implementing Firestore</li>
                <li>Began creating database structure</li>
                <li>Exploring alternatives to Real-time Database</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue database structure development</li>
                <li>Finalize Firestore implementation strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing mobile UI design progress</li>
                <li>Continued verification code development</li>
                <li>Database structure exploration</li>
                <li>Focus on Firestore implementation</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - February 20 */}
        <article className="meeting-log">
          <h2>Meeting - February 20, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Yesterday's Tasks:</p>
              <ul>
                <li>Requested backend discussion with Garrett</li>
                <li>Planned quick chat about backend and branching</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Investigated Next.js</li>
                <li>Managed Git repository</li>
                <li>Prepared to initialize project</li>
                <li>Planned collaboration with backend and frontend teams</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue project initialization</li>
                <li>Coordinate between backend and frontend teams</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Watched basic Figma tutorials</li>
                <li>Began developing app's UI</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue UI development</li>
                <li>Apply Figma learnings to design</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Set up connection between front-end and back-end</li>
                <li>Investigated databases related to Google</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue backend-frontend integration</li>
                <li>Further database research</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed app welcome section in Figma</li>
                <li>Prepared to create Figma views for login and sign-up</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Create login and sign-up Figma views</li>
                <li>Refine welcome section design</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Created database button for test web page</li>
                <li>Connected Firestore to webpage</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firestore integration</li>
                <li>Refine database implementation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Project initialization in progress</li>
                <li>Ongoing UI design in Figma</li>
                <li>Backend and frontend integration continues</li>
                <li>Firestore and database implementation</li>
                <li>Git repository management</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - February 18 */}
        {/* Meeting Log - Database and Backend Discussion */}
        <article className="meeting-log">
          <h2>Meeting - February 17, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Prepared backend team discussion points</li>
                <li>Nearly finished SRS after 4-hour session with Nicolas</li>
                <li>Communicated UI details</li>
                <li>Prepared to investigate backend implementation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Backend Team Action Items:</p>
              <ul>
                <li>Research three Firebase database types:
                  <ul>
                    <li>Firestore</li>
                    <li>Real-time Database</li>
                    <li>Postgres Data</li>
                  </ul>
                </li>
                <li>Investigate Firebase login mechanisms</li>
                <li>Prepare explanation of deployment and hosting processes</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Look into backend details</li>
                <li>Prepare to model database with backend team</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed test frontend</li>
                <li>Successfully connected frontend to Firebase Real-time Database</li>
                <li>Began investigating database differences</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue researching database implementations</li>
                <li>Compare different database types</li>
                <li>Prepare database implementation strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Explained SRS to the team</li>
                <li>Researching script running locations (local vs. cloud)</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS documentation</li>
                <li>Finalize script deployment strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Reviewed SRS documentation</li>
                <li>Began learning Figma</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS review</li>
                <li>Deepen Figma understanding</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Reviewed SRS for front-end specifications</li>
                <li>Began working on second UI draft in Figma</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue UI draft development</li>
                <li>Refine Figma design</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing database research and implementation</li>
                <li>Key focus on Firebase database types</li>
                <li>Continue SRS documentation and review</li>
                <li>UI design and Figma development in progress</li>
                <li>Investigate script deployment strategies</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - February 15 */}
        {/* Meeting Log - February 15, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - February 15, 2025</h2>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Wrote and refactored SRS with Christopher</li>
                <li>Reviewed and re-pathed the application flow</li>
                <li>Discussed authentication script location</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS refinement</li>
                <li>Investigate authentication script deployment options</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued researching JavaScript</li>
                <li>Reviewed the SRS documentation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Deepen JavaScript knowledge</li>
                <li>Provide feedback on SRS</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Set up database for local machine</li>
                <li>Configured database globally</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Optimize database configuration</li>
                <li>Prepare database for development</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on understanding design specifications</li>
                <li>Prepared to implement additional interface sections</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Begin implementing new interface sections</li>
                <li>Continue studying design specifications</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Spent 4 hours working on SRS with Nicolas</li>
                <li>Near completion of SRS documentation</li>
                <li>Communicated UI details</li>
                <li>Discussed authentication script deployment with Nicolas</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize SRS with Nicolas</li>
                <li>Review UI communication details</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>SRS documentation is a key focus</li>
                <li>Authentication script deployment needs decision</li>
                <li>Continued interface and design specification work</li>
                <li>Ongoing JavaScript and database configuration</li>
              </ul>
            </div>
          </section>
        </article>
        {/* Meeting Log - February 15 end */}

        {/* Meeting Log - February 11 */}
        <article className="meeting-log">
          <h2>Meeting - February 11, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Discussed system creation with Nicolas</li>
                <li>Developed full plan for Town Hall system</li>
                <li>Mapped out community and role information structure</li>
                <li>Prepared for continued SRS documentation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS documentation</li>
                <li>Refine system design details</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Revised SRS documentation</li>
                <li>Planned app pathway and direction</li>
                <li>Developed login verification approach</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS refinement</li>
                <li>Detail login verification process</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Added Firestore to the project</li>
                <li>Implemented additional Firebase features</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase integration</li>
                <li>Expand Firebase functionality</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Explored Figma tool</li>
                <li>Assisted in UI design refinement</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue UI design improvements</li>
                <li>Further Figma exploration</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Set up Firebase for Amplify</li>
                <li>Configured Firebase for Town Hall</li>
                <li>Connected Town Hall with Firestore</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase configuration</li>
                <li>Optimize Amplify and Town Hall integration</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Created Figma mock views for Home page</li>
                <li>Designed App Startup Page mockup</li>
                <li>Defined clear UI Style Guidelines</li>
                <li>Added Style Guidelines to Interface Prototype</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine UI mockups</li>
                <li>Further develop UI style guidelines</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing SRS documentation and system design</li>
                <li>Continued Firebase and Firestore integration</li>
                <li>UI design and Figma mockup development</li>
                <li>Focusing on Town Hall system architecture</li>
              </ul>
            </div>
          </section>
        </article>



        {/* Meeting feb 10 */}
        {/* Project Management Meeting Log */}
        <article className="meeting-log">
          <h2>Meeting - February 10, 2025; Project Management Structure Created</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>From experience from leading groups, it is clear that
                  team members need a direction and a clear to do.
                  I have taken the role of project coordinator to ensure
                  that the team is on track and that we are meeting our
                  goals. As done today, there are three groups,
                  the UI and Front-End Team, the Cloud and Backend Infrastructure
                  Team, and the SRS Team. Each team is focused on their own
                  tasks and will present their progress during meetings.
                </li>
                <li>Addressed team attendance expectations</li>
                <li>Defined future meeting protocols</li>
                <li>Established project management subgroups</li>
                <li>Organized team to-do lists and timeline</li>
                <li>Assigned team roles and responsibilities</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Management Roles:</p>
              <ul>
                <li>Project Coordinator</li>
                <li>Project Manager</li>
                <li>System-Level Designer</li>
                <li>Scrum Meeting Captain</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue overseeing project coordination</li>
                <li>Ensure smooth communication between subteams</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Created baseline for ID verification</li>
                <li>Researched backend frameworks</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Role:</p>
              <ul>
                <li>Login and User Admin Lead</li>
                <li>Part of SRS and User Identification Team</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS documentation</li>
                <li>Develop user identification system</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Researched Figma</li>
                <li>Designed broad app outline</li>
                <li>Began Firebase data research</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Role:</p>
              <ul>
                <li>Cloud and Backend Infrastructure Team</li>
                <li>Focused on Google Cloud / Firebase Setup</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Firebase data research</li>
                <li>Prepare for full-stack demo</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Focused on React development</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Role:</p>
              <ul>
                <li>Cloud and Backend Infrastructure Team</li>
                <li>Working on Google Cloud / Firebase integration</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue React development</li>
                <li>Prepare for full-stack demo</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Researched JavaScript</li>
                <li>Learning Figma</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Role:</p>
              <ul>
                <li>UI and Front-End Team</li>
                <li>Working on Figma UI Design</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue JavaScript learning</li>
                <li>Progress with Figma UI design</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Learned Figma functions</li>
                <li>Preparing to finalize UI mockups</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Role:</p>
              <ul>
                <li>UI and Front-End Team</li>
                <li>Responsible for UI Design and Mockups</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize UI mockups</li>
                <li>Prepare presentation of UI design</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Meetings occur every other day (excluding class days)</li>
                <li>Each subteam must present progress during meetings</li>
                <li>Upcoming milestone: Full-stack working demo next Wednesday</li>
                <li>Team roles:
                  <ul>
                    <li>UI Team: Kevin and Ali</li>
                    <li>Cloud/Backend Team: Garrett and Ramsey</li>
                    <li>SRS Team: Christopher and Nicolas</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting feb 8 */}
        <article className="meeting-log">
          <h2>Meeting - February 8, 2025</h2>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into tech stack</li>
                <li>Explored Figma and its usage</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue tech stack research</li>
                <li>Further Figma exploration</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Planned out project concept and identification code</li>
                <li>Began work on SRS documentation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue developing SRS</li>
                <li>Refine project concept details</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Investigated Firebase</li>
                <li>Continued exploring Firebase capabilities</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Deepen Firebase understanding</li>
                <li>Prepare Firebase implementation strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looked into tech stack</li>
                <li>Brushed up on JavaScript skills</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue tech stack research</li>
                <li>Further JavaScript skill development</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Set up Figma for team collaboration</li>
                <li>Created mockup pages for web application</li>
                <li>Designed mockups for Home Page, Login Screen, and Home View</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue UI design in Figma</li>
                <li>Refine web application mockups</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on SRS documentation</li>
                <li>Created tasks for team members</li>
                <li>Developed general project timeline</li>
                <li>Organized meeting structure</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue SRS development</li>
                <li>Learn Figma</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing focus on SRS documentation and project planning</li>
                <li>Multiple team members exploring tech stack and tools</li>
                <li>Figma being used for UI design and collaboration</li>
                <li>Firebase investigation continues</li>
              </ul>
            </div>
          </section>
        </article>
        {/* Meeting feb 8 end */}

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
      <div className="team-members">
        Website made by Kurdoghlian
      </div>
    </div>
  )
}

export default App
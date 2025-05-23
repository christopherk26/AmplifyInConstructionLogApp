import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>In Construction Kurdos, Inc. Meeting Logs</h1>
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


        {/* Meeting Log - May 4, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - May 4, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed final project presentation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Practice presentation with team members</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Final presentation ready</li>
                <li>Presentation practice needed</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - April 29, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 29, 2025</h2>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Started work on final write-up and document</li>
                <li>Made significant progress on documentation</li>
                <li>Developed comprehensive project overview</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue finalizing project documentation</li>
                <li>Refine project write-up</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued work on CEO document</li>
                <li>Reviewed implementation document</li>
                <li>Submitted use case documentation</li>
                <li>Finalized submission of project documents</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Final document review</li>
                <li>Prepare for project presentation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Began planning for final presentation</li>
                <li>Started organizing presentation materials</li>
                <li>Developed initial presentation strategy</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue presentation planning</li>
                <li>Develop presentation outline</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Final project documentation in progress</li>
                <li>Preparation for project presentation</li>
                <li>Continued document refinement</li>
                <li>Final submission of project materials</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - April 28, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 28, 2025</h2>

          <section>
            <h3>Garrett and Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed the implementation document</li>
                <li>Finalized comprehensive project documentation</li>
                <li>Synthesized project development patterns and approaches</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Review implementation document</li>
                <li>Prepare for final document submission</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Implementation document completed</li>
                <li>Preparation for final project documentation</li>
                <li>Continued focus on project documentation</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - April 25-26, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 25-26, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Comprehensive Bug Fixes:</p>
              <ul>
                <li>Repaired Firestore rules</li>
                <li>Fixed comment number updating mechanism</li>
                <li>Corrected emoji display for user roles</li>
                <li>Updated post page and search page dropdowns to reflect current community selection</li>
                <li>Fixed emergency post dropdown in create post section</li>
                <li>Implemented recursive comment deletion to remove child comments</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue system refinement</li>
                <li>Address any remaining minor issues</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali and Christopher</h3>
            <div className="member-update">
              <p className="member-name">Use Case Testing:</p>
              <ul>
                <li>Conducted comprehensive human testing of the entire site</li>
                <li>Completed 70 detailed use cases</li>
                <li>Documented testing process with:
                  <ul>
                    <li>Page tested</li>
                    <li>Use case description</li>
                    <li>Expected outcome</li>
                    <li>Actual result</li>
                    <li>Pass/Fail status</li>
                  </ul>
                </li>
                <li>Created detailed testing document</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Testing Documentation:</p>
              <ul>
                <li>Comprehensive test report available at:
                  <a href="https://docs.google.com/spreadsheets/d/1fB9UAnauQp_KAiFCn1FDCtiy0cuo24aeb4ku9Gojork/edit?usp=sharing">
                    Detailed Use Case Testing Document
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Extensive bug fixing completed</li>
                <li>Comprehensive use case testing finished</li>
                <li>Continued focus on system reliability</li>
                <li>Preparation for potential further refinements</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - April 18, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 18, 2025</h2>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed search page development</li>
                <li>Implemented regex searching functionality</li>
                <li>Added advanced search filtering options</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine search functionality</li>
                <li>Optimize search performance</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Updated admin page</li>
                <li>Completed CSV upload and user role service</li>
                <li>Worked with Nicolas on trending post logic</li>
                <li>Finalized post trending implementation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue admin page refinement</li>
                <li>Review trending post mechanism</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Began working on implementation document</li>
                <li>Started documenting project patterns</li>
                <li>Prepared initial draft of implementation documentation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue implementation document development</li>
                <li>Collaborate with Ali and Garrett on pattern identification</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Investigated Jest testing suite</li>
                <li>Began exploring testing strategies</li>
                <li>Worked with Ali on testing implementation</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue Jest testing research</li>
                <li>Develop initial test cases</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Collaborated with Chris on trending post logic</li>
                <li>Completed implementation of post trending mechanism</li>
                <li>Prepared for C0 testing development</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Begin C0 testing strategy development</li>
                <li>Start creating comprehensive test cases</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Assisted Garrett with Jest testing</li>
                <li>Helped explore testing strategies</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue testing support</li>
                <li>Help develop test cases</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Remaining Tasks</h3>
            <div className="member-update">
              <ul>
                <li>Complete implementation document</li>
                <li>Develop comprehensive testing strategy</li>
                <li>Create C0 and unit tests</li>
                <li>Finalize project documentation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing implementation documentation</li>
                <li>Testing suite development</li>
                <li>Continued project refinement</li>
                <li>Preparation for final project phase</li>
              </ul>
            </div>
          </section>
        </article>



        {/* Meeting Log - April 15, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 15, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Deployed the application with Firebase hosting</li>
                <li>Provided team with comprehensive project plan</li>
                <li>Prepared for upcoming feature integrations</li>
                <li>Reviewed overall project architecture</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue project coordination</li>
                <li>Prepare for next development phase</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Decided to discontinue using Figma for design</li>
                <li>Discussed alternative design approaches</li>
                <li>Prepared to transition design process</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Explore new design collaboration methods</li>
                <li>Discuss design workflow alternatives</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued work on trending post logic</li>
                <li>Refined post sorting mechanisms</li>
                <li>Worked on additional filtering capabilities</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize trending post algorithm</li>
                <li>Optimize post sorting performance</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued development of notification system</li>
                <li>Refined notification delivery mechanisms</li>
                <li>Worked on community-specific notification settings</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete notification system refinements</li>
                <li>Test notification delivery</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued refinement of comment interaction features</li>
                <li>Optimized nested commenting system</li>
                <li>Improved overall comment UI and functionality</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize comment system improvements</li>
                <li>Prepare for comprehensive testing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued mobile application design exploration</li>
                <li>Worked on responsive design approaches</li>
                <li>Explored mobile view implementation strategies</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue mobile design refinement</li>
                <li>Test responsive design approaches</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Application deployed on Firebase</li>
                <li>Continued refinement of core features</li>
                <li>Ongoing design and functionality improvements</li>
                <li>Preparation for comprehensive testing</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - April 11, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 11, 2025</h2>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Finalized Firebase function for user verification</li>
                <li>Completed authentication mechanism for community joining</li>
                <li>Integrated user verification with existing system</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Perform comprehensive verification testing</li>
                <li>Document user authentication flow</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Refined comment interaction features</li>
                <li>Implemented nested commenting up to 4 layers deep</li>
                <li>Added comment deletion functionality</li>
                <li>Completed UI for comment interactions</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Test comment system thoroughly</li>
                <li>Optimize comment interaction performance</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued implementation of Firestore security rules</li>
                <li>Developed comprehensive backend authentication logic</li>
                <li>Ensured robust user interaction security</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize security rule implementation</li>
                <li>Conduct security penetration testing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>User verification function completed</li>
                <li>Advanced comment interaction system implemented</li>
                <li>Ongoing Firestore security rule development</li>
                <li>Continued focus on system authentication</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - April 9, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 9, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued refinement of admin page</li>
                <li>Updated roles UI and database</li>
                <li>Simplified role management scripts</li>
                <li>Improved overall admin UI design</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Further optimize admin page</li>
                <li>Review role management system</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Explored mobile application approach</li>
                <li>Investigated Chrome instance for mobile view</li>
                <li>Looked into Android emulator and Xcode possibilities</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue mobile application research</li>
                <li>Develop initial mobile view prototype</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Finalized notification system improvements</li>
                <li>Completed UI updates for notifications</li>
                <li>Implemented comprehensive "delete all" functionality</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Test notification system thoroughly</li>
                <li>Prepare documentation for notification features</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Admin page and roles management refined</li>
                <li>Notification system improvements completed</li>
                <li>Mobile application research initiated</li>
                <li>Continued focus on UI and feature optimization</li>
              </ul>
            </div>
          </section>
        </article>



        {/* Meeting Log - April 3, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 3, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Developed moderator post management features</li>
                <li>Implemented functionality for:
                  <ul>
                    <li>Moving posts to archive section</li>
                    <li>Pinning posts</li>
                    <li>Deleting personal posts</li>
                  </ul>
                </li>
                <li>Refined role-based posting permissions</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Test moderator post management features</li>
                <li>Review role-based permissions</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Implemented search functionality with regex matching</li>
                <li>Developed dropdown search with advanced filtering</li>
                <li>Added complex search capabilities to the application</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine search functionality</li>
                <li>Optimize search performance</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas and Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Developed logic for trending posts</li>
                <li>Implemented post sorting based on upvotes in the last week</li>
                <li>Created Firestore indices for efficient sorting</li>
                <li>Added support for pinned and archived posts</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine trending post mechanism</li>
                <li>Test post sorting and indexing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Moderator post management features completed</li>
                <li>Advanced search functionality implemented</li>
                <li>Trending posts logic developed</li>
                <li>Continued focus on application refinement</li>
              </ul>
            </div>
          </section>
        </article>



        {/* Meeting Log - April 2, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 2, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed implementation of Admin SDK</li>
                <li>Developed scripts to bypass Firestore rules for administrative tasks</li>
                <li>Refined populate scripts with new admin credentials</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Test Admin SDK functionality</li>
                <li>Ensure secure script execution</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued work on notification system</li>
                <li>Updated UI for notifications</li>
                <li>Implemented "delete all" functionality for notifications</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize notification system improvements</li>
                <li>Perform comprehensive notification feature testing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued development of Firebase function for user verification</li>
                <li>Refined community joining authentication process</li>
                <li>Integrated user verification with existing authentication flow</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete user verification function</li>
                <li>Prepare for comprehensive testing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued development of comment functionality</li>
                <li>Implemented liking comments feature</li>
                <li>Added ability to comment on comments</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine comment interaction features</li>
                <li>Test nested commenting system</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Admin SDK implementation completed</li>
                <li>Ongoing notification system improvements</li>
                <li>Continued comment functionality development</li>
                <li>User verification process refinement</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - April 1, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - April 1, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued refinement of Firebase Firestore security rules</li>
                <li>Worked on implementing comprehensive backend authentication logic</li>
                <li>Developed additional security constraints for user interactions</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize Firestore security rule implementation</li>
                <li>Test comprehensive authentication mechanisms</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Progressed on Firebase function for user verification</li>
                <li>Developed initial mechanisms for community joining process</li>
                <li>Worked on authentication flow integration</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue refining user verification function</li>
                <li>Improve community joining authentication</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Implemented initial commenting functionality</li>
                <li>Developed core logic for comment interactions</li>
                <li>Started work on comment liking feature</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue comment feature development</li>
                <li>Refine comment interaction mechanisms</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing Firestore security rule implementation</li>
                <li>User verification and authentication development</li>
                <li>Comment interaction feature progress</li>
                <li>Continued focus on backend security</li>
              </ul>
            </div>
          </section>
        </article>






        {/* Meeting Log - March 30, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 30, 2025</h2>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Created new development branch</li>
                <li>Merged Garrett's commenting branch</li>
                <li>Enhanced commenting functionality:
                  <ul>
                    <li>Implemented likes system</li>
                    <li>Developed nested comments up to 4 layers deep</li>
                    <li>Added comment deletion feature</li>
                  </ul>
                </li>
                <li>Designed UI for new commenting and interaction features</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Project Note:</p>
              <ul>
                <li>Spring break this week, anticipating reduced team activity</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue feature refinement</li>
                <li>Prepare for post-spring break team sync</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Minimal project activity during spring break</li>
                <li>New commenting and interaction features implemented</li>
                <li>Prepare for resumed development after break</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - March 24, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 24, 2025</h2>




          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Began comprehensive codebase refactoring</li>
                <li>Developed team-wide code understanding strategy</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue codebase refactoring</li>
                <li>Conduct code review and knowledge sharing</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Mobile application design progress</li>
                <li>Advanced search functionality</li>
                <li>Continued focus on SOLID design principles</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - March 23, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 23, 2025</h2>

          <section>
            <h3>Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Looking into commenting on commnnts functionality</li>
              </ul>
            </div>

          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on advanced user verification methods</li>
                <li>Developed additional security layers for community access</li>
                <li>Refined authentication document handling</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue enhancing verification processes</li>
                <li>Implement additional security checks</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on admin tools for user management</li>
                <li>Developed CSV upload functionality for user roles</li>
                <li>Implemented document handling for community roles</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine admin user management tools</li>
                <li>Continue developing role assignment mechanisms</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing user verification and security improvements</li>
                <li>Emergency alerts and role-based posting development</li>
                <li>Admin tools and user role management</li>
                <li>Continued focus on system security</li>
              </ul>
            </div>
          </section>
        </article>
        {/* Meeting Log - March 22, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 22, 2025</h2>

          <section>
            <h3>Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Completed settings page development</li>
                <li>Implemented notification preferences for communities</li>
                <li>Added option to manage community notifications</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Refine settings page functionality</li>
                <li>Add additional user preference options</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Developed comprehensive notification system</li>
                <li>Created mechanism to send notifications to opted-in users</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Add advanced notification filtering</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Developed preliminary sidebar for mobile responsiveness</li>
                <li>Fixed scrolling issues on side pages</li>
                <li>Resolved dashboard button linking</li>
                <li>Addressed community page navigation bugs</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Further debug navigation issues</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Notification system development</li>
                <li>Mobile responsiveness improvements</li>
                <li>Settings page functionality</li>
                <li>Continued bug fixing and navigation improvements</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - March 21, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 21, 2025</h2>

          <section>
            <h3>Kevin and Ali</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Updated README.md with project documentation</li>
                <li>Added instructions for running the app</li>
                <li>Included key points from SRS</li>
                <li>Added links to project diagrams</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize documentation</li>
                <li>Add additional project resources</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Implemented terms and conditions page</li>
                <li>Added link to terms and conditions in site footer</li>
                <li>Continued refactoring codebase</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Review design principle implementation</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued debugging Firebase authentication</li>
                <li>Refined user verification processes</li>
                <li>Worked on community joining mechanisms</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize authentication debugging</li>
                <li>Optimize user verification flow</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Project documentation completion</li>
                <li>Continued codebase refactoring</li>
                <li>Authentication and verification improvements</li>
                <li>Terms and conditions page implementation</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - March 19, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 19, 2025</h2>

          <section>
            <h3>Ali and Kevin</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Investigated mobile application development</li>
                <li>Explored Android emulator setup</li>
                <li>Began researching Xcode for iOS compatibility</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Continue mobile development research</li>
                <li>Refine responsive design</li>
                <li>Test mobile web application</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Implemented trending posts logic</li>
                <li>Developed Firestore indices for sorting</li>
                <li>Created algorithm for post ranking</li>
              </ul>
            </div>

          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on landing page design</li>
                <li>Implemented moderator post management</li>
                <li>Added functionality for:
                  <ul>
                    <li>Moving posts to archive</li>
                    <li>Pinning posts</li>
                    <li>Deleting personal posts</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize landing page</li>
                <li>Refine moderator post management</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Mobile development exploration</li>
                <li>Trending posts implementation</li>
                <li>Moderator post management features</li>
                <li>Landing page design</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Meeting Log - March 17, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 17, 2025</h2>

          <section>
            <h3>Nicolas</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Developed Firebase function for user verification</li>
                <li>Worked on community joining authentication</li>
                <li>Refined user authentication flow</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete user verification function</li>
                <li>Implement community joining logic</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Ali and Garrett</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Started implementing comment interactions</li>
                <li>Developing liking comments functionality</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete comment interaction features</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Developed Firestore security rules</li>
                <li>Implemented backend authentication requirements</li>
                <li>Created admin SDK integration for scripts</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Finalize Firestore security rules</li>
                <li>Test admin SDK script execution</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing user and community authentication</li>
                <li>Comment interaction feature development</li>
                <li>Firestore security rule implementation</li>
                <li>Admin SDK integration</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Meeting Log - March 15, 2025 */}
        <article className="meeting-log">
          <h2>Meeting - March 15, 2025</h2>



          <section>
            <h3>Ramsey</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Continued notification system research</li>
                <li>Explored different notification architectures</li>
                <li>Began designing notification delivery mechanism</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Develop community-specific notification system</li>
                <li>Create notification preferences logic</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Christopher</h3>
            <div className="member-update">
              <p className="member-name">Today's Tasks:</p>
              <ul>
                <li>Worked on thinking about admin page for CSV uploads</li>
                <li>Developed user role service</li>
                <li>Continued refactoring codebase to follow SOLID principles</li>
              </ul>
            </div>
            <div className="member-update">
              <p className="member-name">Tomorrow's Tasks:</p>
              <ul>
                <li>Complete admin page functionality</li>
                <li>Continue code refactoring</li>
              </ul>
            </div>
          </section>

          <section>
            <h3>Reminders</h3>
            <div className="member-update">
              <ul>
                <li>Ongoing notification system development</li>
                <li>Search functionality implementation</li>
                <li>Continued focus on SOLID design principles</li>
                <li>Admin page and user role management</li>
              </ul>
            </div>
          </section>
        </article>


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
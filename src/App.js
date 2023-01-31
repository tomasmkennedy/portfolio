import './App.css';
import './images/kanban.png';

function App() {
  return (
    <div className="App">
      <body>
        <section>
          <div className="spacer layer1">
            <div className="content" style={{ marginTop: 50, lineHeight: 0 }}>
              <h1>Hi, I'm Tomas</h1>
              <p>I'm a computer science student at The Ohio State University. I love software development so I
              figured I would make a place to show off some of my projects
                </p>
            </div>
          </div>
          <div className="spacer layer2">
            <div className="content" style={{ marginTop: 100 }}>
              <h1>What I've done</h1>
              <p>My most recent projects have been focused in web development, thanks in part to a course
              I took that was centered around web development. This really helped kickstart my JavaScript
              learning, and helped me transition into learning about more in-depth topics like React.js and
              Firebase. Here is a screenshot of an ongoing project I've been working on that uses both of these
              technologies
                </p>
              <img className="project" src={require('./images/kanban.png')} width="640" height="360" alt="Kanban-Board Screenshot"></img>
              <p>The basic idea for this project is that it is a board that the user can take advantage of to track
              ongoing projects. I learned a lot about React and its inner workings such as React hooks, as well
              as promises in Javascript thanks to the Firebase implementation. I plan on adding user
              authentication, as well as moving to a different React library for drag and drop functionality to
              improve some general bugginess reordering the lists.
                </p>
            </div>
          </div>
          <div className="spacer"></div>
        </section>
      </body>
    </div >
  );
}

export default App;

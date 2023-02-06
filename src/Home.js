import './App.css';
import './images/kanban.png';
import SimpleCarousel from './Components/Carousel.js';

function Home() {
    return (
        <div className="App">
            <section>
                <div className="spacer layer1">
                    <div className="content" style={{ marginTop: 50, lineHeight: 0 }}>
                        <h1>Kanban Board</h1>
                        <p>I'm a computer science student at The Ohio State University. I love software development so I
                        figured I would make a place to show off some of my projects
                </p>
                    </div>
                </div>
                <div className="spacer layer2">
                    <div className="content" style={{ marginTop: 150 }}>
                        <h1>My Projects</h1>
                        <p>My most recent projects have been focused in web development, thanks in part to a course
                        I took that was centered around web development. This really helped kickstart my JavaScript
                        learning, and helped me transition into learning about more in-depth topics like React.js and
                        Firebase. Here is a screenshot of an ongoing project I've been working on that uses both of these
                        technologies
                </p>
                        <div className="carousel-container">
                            <SimpleCarousel />
                        </div>
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
            <a href="https://open.spotify.com/playlist/4kGrcR5I5iu5IWaqenhrjr?si=a980ea7882df4a4e">work playlist</a>
        </div >
    );
}

export default Home;
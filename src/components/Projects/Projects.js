import Project from '../Project/Project'
import '../Projects/Projects.css'

const Projects = (props) => {
    return (
        <>
        <p className="section">projects <i className="fas fa-project-diagram"></i></p>
            <div className="projects">
            <Project 
            img={'projects/Runner.png'}
            title={"runnner"}
            description={"The fast-paced driving survival mini-game."}
            gif={"/project-demo/GIF/runner.gif"}
            gitLink={"https://github.com/howardjake/runner-game"}
            deployed={"https://howardjake.github.io/RUNNER-touch/"}
            timer={"ani-1 image"}
            />
            <Project 
            img={'projects/NYT.png'}
            title={"Unoffcial NYTBS Explorer"}
            description={"A basic web application where users can explore the New York Times Best Sellers lists, both current and archived."}
            gif={"/project-demo/GIF/NYT.gif"}
            gitLink={"https://github.com/howardjake/NYT-BS-Explorer"}
            deployed={"https://nyt-bs-explorer.vercel.app/"}
            timer={"ani-2 image"}
            />  
            <Project 
            img={'projects/Classroom.png'}
            title={"Gradebook"}
            description={"This single page app is designed for teachers to keep track of their stuents assignments. "}
            gif={"/project-demo/GIF/gradebook.gif"}
            gitLink={"https://github.com/howardjake/classroom-frontend"}
            deployed={"https://gradebookapp.netlify.app/"}
            timer={"ani-3 image"}
            />  
            <Project 
            img={'projects/Followup.png'}
            title={"Followup"}
            description={"A contact organization tool specially designed for freelance, job searching, and creative self-marketing. "}
            gif={"/project-demo/GIF/followup.gif"}
            gitLink={"https://github.com/howardjake/followup-"}
            deployed={"https://followup-1.netlify.app/"}
            timer={"ani-4 image"}
            />  
            <Project 
            img={'projects/Mood_bud.png'}
            title={"mood_bud"}
            description={"A new way to organize your inspiration. "}
            gif={"/project-demo/GIF/mood_bud.gif"}
            gitLink={"https://github.com/howardjake/mood_bud"}
            deployed={"https://mood-bud-app.herokuapp.com/"}
            timer={"ani-5 image"}
            />
            </div>
              {/* <hr /> */}
        </>
    )
}

export default Projects;

import '../Project/Project.css';

const Project = (props) => {
    return (
        <div className="project">
            <a target="_blank" rel="noreferrer" href={props.deployed}>
            <div className="container">
            <img src={props.img} alt={props.title} className={props.timer}/>
            <div className="overlay">
                <div className="text">
                </div>
                <img src={props.gif} alt="" className={props.timer}/>
                </div>
            </div>
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href={props.deployed}><h2>{props.title}</h2></a>
            <h3 className="description">{props.description}</h3>
            <a href={props.gitLink} target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
        </div>
        
    )
}

export default Project;
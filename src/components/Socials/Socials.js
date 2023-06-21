import '../Socials/Socials.css'

const Summary = (props) => {
    return (
        <div className="socials">
            <p className="section">socials <i class="fas fa-users"></i></p>
            <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/howardjake">
                    <i className="fab fa-github fa-5x social-icon" ></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jake-b-howard/">
                    <i className="fab fa-linkedin fa-5x social-icon"></i>
                </a>
        </div>
        </div>
    )
}

export default Summary;
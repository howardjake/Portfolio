
const Summary = (props) => {
    let Year = new Date().getFullYear()
    let yearsSince = Year - 2020
    return (
        <div className={"summary"}>
            <h1>Hi,</h1>
            <h2>I'm Jake, a Software Engineer with {yearsSince} years experience working on web applications and software. My focus on smart solutions and constant learning has allowed me to achieve some great things.
            Please take a look. 
            </h2>
        </div>
    )
}

export default Summary;
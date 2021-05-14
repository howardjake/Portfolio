import '../HeroCard/HeroCard.css'
import Summary from '../Summary/Summary'

const HeroCard = (props) => {
    return (
        <div className="hero-card">
            <Summary />
            <img className="hero-img" src="./hero-image.jpg" alt="hero-img" />
            
        </div>
    )
}

export default HeroCard;
import './App.css';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Socials from './components/Socials/Socials'
import Blog from './components/Blog/Blog';
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App" >

      <Header />
      <div id="top" className="non-header">
      <div className="spacer"></div>
      <HeroCard />
      <br id="projects" />
      <div className="arrows">
      <Link className="nav2" activeClass="active" to="projects" spy={true} smooth={true}>
                
        <i className="fas fa-arrow-down fa-3x"></i>
      </Link>
      </div>
      <Projects id="projects"/>
      
      <Blog />
    
      
      <div id="contact" className="end">
      <Contacts/>

      <Socials />
      </div>
      <div className="arrows">
      <Link className="nav2" activeClass="active" to="top" spy={true} smooth={true}>
                
        <i class="fas fa-arrow-up fa-3x"></i>
      </Link>

      </div>
      </div>
      <br />
      <br />
      <br />
      </div>
      
  );
}

export default App;

import styles from './Header.module.css';
import { Link } from "react-scroll";


const Header = (props) => {
    return (
        <div className="App-header">
    <header >
     <h1 className={styles.title}>Jake Howard</h1>
     <ul className={styles.links}>
             
         <li className={styles.link}>
             <Link className="nav" activeClass="active" to="projects" spy={true} smooth={true}>
                 Projects
             </Link>
         </li>
             
         <li className={styles.link}>
         <Link className="nav" activeClass="active" to="contact" spy={true} smooth={true}>
                 Contact
             </Link>
         </li>
         {/* <li className={styles.link}>
         <Link className="nav" activeClass="active" to="socials" spy={true} smooth={true}>
                 Socials
             </Link>
         </li> */}
     </ul>
        </header>
       
        </div>
    )
}

export default Header;
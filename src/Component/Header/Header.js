
import "./Header.scss"
import { Link } from "react-router-dom"
const Header = () =>{
    return <nav className="navbar">
        <div className="navbar-links">
           <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contact"><li>Contacts</li></Link>
           </ul>
        </div>
    </nav>
}
export default Header
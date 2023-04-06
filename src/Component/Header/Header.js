
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () =>{
    return <nav className="navbar">
        <div className="navbar-links">
           <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contacts"><li>Contacts</li></Link>
           </ul>
        </div>
    </nav>
}
export default Header
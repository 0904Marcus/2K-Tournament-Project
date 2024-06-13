import { Link } from "react-router-dom"
import "../styleSheets/NavBar.css"
import "../styleSheets/Variables.css"

const NavBar = () => {
  return (
    <nav id='NavBar'>
        <Link to="/">Home</Link>
        <ul>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/tournamentTree">Tournament Tree</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar

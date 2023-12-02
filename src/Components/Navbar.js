import {Link} from "react-router-dom";
import  "./Navbar.css";

function NavBar(){
    return(
        <header className={"navbar-wrapper"}>
            <Link to={"/home"}><h1>Tuana Bicakci</h1></Link>
            <nav className={"navbar"}>
                <Link to={"/home"}>ALL WORK</Link>
                <Link to={"/about-me"}>ABOUT ME</Link>
            </nav>
        </header>
    );
}

export default NavBar;
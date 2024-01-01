import {Link} from "react-router-dom";
import  "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import resume from "../PDFs/TuanaBicakciResume.pdf"
function NavBar(){
    const navRef = useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav")
    }
    return(
        <header className={"navbar-wrapper"}>
            <Link to={"/"}>Tuana Bicakci</Link>
            <nav className={"navbar"} ref={navRef}>
                <Link to={"/code"}>CODE</Link>
                <Link to={"/art"}>ART</Link>
                <a href={resume}>ABOUT ME</a>
            </nav>
            <button className={"nav-btn"} onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>

    );
}

export default NavBar;
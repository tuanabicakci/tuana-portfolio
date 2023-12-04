import {Link} from "react-router-dom";
import  "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

function NavBar(){
    const navRef = useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav")
    }
    return(
        <header className={"navbar-wrapper"}>
            <Link to={"/"}><h1>Tuana Bicakci</h1></Link>
            <nav className={"navbar"} ref={navRef}>
                <Link to={"/code"}>CODE</Link>
                <Link to={"/art"}>ART</Link>
                <Link to={"/other"}>OTHER</Link>
                <Link to={"/"}>ABOUT ME</Link>
                <button className={"nav-btn nav-close-btn"} onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className={"nav-btn"} onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;
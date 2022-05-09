import { useState } from "react";
import { Link } from "react-router-dom";
import NavMain from "./NavMain";
import logo from "../images/logo.png";

function Header() {

    const [dropDown, setDropDown] = useState(false);

    function openDropDown() {
        setDropDown(!dropDown);
    }

    return (
        <header className={dropDown && "show"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>

            <Link to="/">
                <img src={logo} alt="Logo for website" className="logo" />
            </Link>

            <button className="hamburger-menu" onClick={openDropDown}>
                <span className="button-content">
                    <span className="bar"></span>
                </span>
            </button>

            <NavMain />
        </header>
    )
}
export default Header
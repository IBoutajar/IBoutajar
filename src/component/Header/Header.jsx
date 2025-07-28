import { useState } from "react";
import Logo from '../../assets/logo-Ilyes.webp'
import '../Header/Header.scss'
import Nav from '../Nav/Nav'
import MenuBurger from "../MenuBurger/MenuBurger";
import Me from "../Me/Me";


function Header() {
    //déclaration d'un état local pour contrôler l'état de la navigation
    const [isNavOpen, setIsNavOpen] = useState(false);

    //fonction pour basculer l'état de la navigation
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div id="home" className="wrapperHeader">
            <div className="header">
            <img className="logo" src={Logo} alt="logo Ilyes Boutjar" />
            {isNavOpen && <Nav />}
            <MenuBurger onClick={toggleNav} />
            </div>
            <Me/>
        </div>
    );
}

export default Header;
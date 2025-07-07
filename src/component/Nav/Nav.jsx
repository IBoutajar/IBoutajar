import "../Nav/Nav.scss";

function Nav() {
    return (
        <div className="navWrapper">
            <nav>
                <ul className="navMenu">
                    <li><a href="#project">☄️ Projet réalisé</a></li>
                    <li><a href="#skill">🪐 Compétences et outils</a></li>
                    <li><a href="#contact">🚀 Contact</a></li>

                </ul>
            </nav>
        </div>
    );
};

export default Nav;
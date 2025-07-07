import '../Footer/Footer.scss'
import discord from '../../assets/discord-icon.png'
import linkedin from '../../assets/logo-linkedin.png'
import arrowTop from "../../assets/arrowTop.png"

function Footer() {
    return (
        <div id="contact" className="wrapperFooter">
            <h2>Me contacter</h2>

            <div className="containerSocial">

                <p>Pour toutes demandes de collaboration ou autre, voici les différentes manières de me contacter pour échanger.</p>

                <div className="contentContact">

                    <div className="linkContent">
                        <a href="https://discord.gg/7n4muWgY"><img src={discord} alt="logo discord"/></a>
                        <a href="https://www.linkedin.com/in/ilyes-boutajar-82b774373/"><img src={linkedin} alt="logo linkdin"/></a>
                    </div>


                </div>
            </div>
            <a className="linkTop" href="#home"><img className="top" src={arrowTop} alt="flèche vers le haut"/></a>
        </div>
    );
}


export default Footer
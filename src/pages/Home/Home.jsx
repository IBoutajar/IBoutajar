import "../Home/Home.scss"
import Header from "../../component/Header/Header"
import Projet from "../../component/Projets/Projet"
import System from "../../component/System/System"
import Footer from "../../component/Footer/Footer"




function Home() {

    return (
        <div>
            <Header />
            <Projet id="project"/>
            <System id="skill" />
            <Footer id="contact" />
        </div>
    )
}


export default Home
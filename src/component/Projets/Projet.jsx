import projets from '../../Data/data.json'
import LogoGit from '../../assets/github.png'
import '../Projets/Projet.scss'


function Projet () {
    
    return (
        <div id="project" className="wrapperProjet">
            <h2>Projets réalisés</h2>
            <div className="containerCard">
                {
                    projets.map(project => (
                        <div key={project.id} className="card tilt-card">
                            <div className="cardHover">
                                <p className="decripProject">{project.description}</p>
                            </div>
                            <div className="title-link">
                                <p className="titleProject">{project.title}</p>
                                <a href={project.githubUrl}>
                                    <img src={LogoGit} alt="logo github" />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projet;
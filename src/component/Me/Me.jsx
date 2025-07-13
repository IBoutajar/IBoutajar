import { useState, useEffect } from 'react';
import '../Me/Me.scss';
import github from "../../assets/github.png";

function Me() {
    //état pour stocker le titre animé
    const [animatedTitle, setAnimatedTitle] = useState('');
    const originTitle = "Ilyes Boutajar";

    const[animatedSecondTitle, setAnimatedSecondTitle] = useState('');
    const originSecondTitle = "Intégrateur Web";


    //état pour stocker le texte animé
    const [animatedText, setAnimatedText] = useState('');
    const originalText = "Passionné par l'informatique, les jeux vidéo, j'ai commencé à étudier le développement web en 2024. J'ai suivi une formation, celle d'OpenClassrooms sur l'intégration web.";

    //effet qui démarre l'animation
    useEffect(() => {
        let titleIndex = 0;
        let secondTitleIndex = 0;
        let textIndex = 0;

        //interval pour le titre
        const titleIntervalId = setInterval(() => {
            if (titleIndex <= originTitle.length) {
                setAnimatedTitle(originTitle.substring(0, titleIndex));
                titleIndex++;
            } else {
                clearInterval(titleIntervalId);
            }
        }, 40);//vitesse pour le titre


                //interval pour le titre
                const secondTitleIntervalId = setInterval(() => {
                    if (secondTitleIndex <= originSecondTitle.length) {
                        setAnimatedSecondTitle(originSecondTitle.substring(0, secondTitleIndex));
                        secondTitleIndex++;
                    } else {
                        clearInterval(secondTitleIntervalId);
                    }
                }, 20);//vitesse pour le titre secondaire

        //interval pour le texte
        const textIntervalId = setInterval(() => {
            if (textIndex <= originalText.length) {
                setAnimatedText(originalText.substring(0, textIndex));
                textIndex++;
            } else {
                clearInterval(textIntervalId);
            }
        }, 10);//vitesse pour le texte

        return () => {
            clearInterval(titleIntervalId);
            clearInterval(textIntervalId);
            clearInterval(secondTitleIntervalId);
        };
    }, []);

    return (
        <div className="meWrapper">
            <h2>{animatedTitle}</h2>
            <h3>{animatedSecondTitle}</h3>
            <p>{animatedText}</p>
            <div className="git">
                <div className='blockLink'>
                    <a className='textLink' href='https://github.com/IBoutajar'>Pour voir mes réalisations !</a>
                </div>

                <div className='blockLink'>
                    <a href="https://github.com/IBoutajar">
                        <img className='github' src={github} alt='logo github' />
                    </a>     
                </div>       
            </div>
        </div>
    );
};

export default Me;
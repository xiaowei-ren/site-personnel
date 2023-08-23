import Parcour from '../components/Parcour/Parcour'
import profession from '../assets/profession.svg'
import education from '../assets/education.svg'
import '../style/Experience.css'


function Experience (){
    return(
        <div className='experience' id="experience">
            <div className='experience-container container'>
                <h2>Experience</h2>
                <div className='contenus-container'>
                    <Parcour icon={profession} title={"Professional experience"} 
                        parcour1={"Stagiaire developpeuse d'information"}
                        name1={"Openclassroom, Paris (09/2022 - 03/2023)"}
                        parcour2={"Stagiaire en web marketing"}
                        name2={"Readymade networks, Paris (12/2020 - 04/2021)"}
                        parcour3={"Directrice de la strategie marketing"} 
                        name3={"Société de biotechnologie de Wopu, Chine (2012-2015)"}
                        parcour4={"Marketeur - Département du marketing"}
                        name4={"Groupe de radio et télévision de Zhejiang, 4è réseau de télévision, Chine (2010-2012)"}
    
                    />
                    <div className='line'></div>
                    <Parcour icon={education} title={"Diplômes obtenus"} 
                        parcour1={"Diplôme Développement web (BAC +2)"}
                        name1={"OpenClassrooms (2023)"}
                        parcour2={"Manager Marketing Data & Commerce Electronique (BAC+6)"} 
                        name2={"Skema Business School (2021)"}
                        parcour3={"Expert en stratégie marketing et communication (BAC+5)"}
                        name3={"Efficom Lille et OpenClassrooms (2019)"}
                        parcour4={"Technologie appliquée d'information électronique (BAC+3)"}
                        name4={"Université de technologie appliquée électronique de Zhengzhou  (2010)"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience;
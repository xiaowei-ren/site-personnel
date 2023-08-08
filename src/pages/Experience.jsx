import Parcour from '../components/Parcour/Parcour'
import profession from '../assets/profession.svg'
import education from '../assets/education.svg'
import '../style/Experience.css'


function Experience (){
    return(
        <div className='experience container'>
            <div className='experience-container'>
                <h2></h2>
                <div className='contenus-container'>
                    <Parcour icon={profession} title={"Professional experience"} parcour1={"Stagiaire en web marketing - Readymade Networks"} parcour2={"Directrice de la strategie marketing - Whopu"} parcour3={"Autre"}/>
                    <Parcour icon={education} title={"Education"} parcour1={"Diplôme Développement web (BAC +2)"} parcour2={"Master Spécialisé (BAC+6)"} parcour3={"Expert en stratégie marketing et communication"}/>
                </div>
            </div>
        </div>
    )
}

export default Experience;
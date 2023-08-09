
import Carte from '../components/Carte/Carte'
import Title from '../components/Title/Title'
import '../style/Skills.css'
import coding from '../assets/coding.jpg'
import marketing from '../assets/marketing.jpg'

function Skills () {
    return(
        <div className='skills'>
            <div className='page-container container'>
                <div className='container-top'>
                    <Title title={"Skills"}
                    descrip={"Mes expériences professionnelles me permettent d'être aujourd'hui autonome, Polyvalent et de disposer des compétences techniques dont voici un aperçu :"}/>
                </div>
                <div className='container-under'>
                    <Carte img={coding} title={"Programming"} name={"HTML/CSS"}/>
                    <Carte img={marketing} title={"Marketing digital"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
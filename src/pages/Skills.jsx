
import Carte from '../components/Carte/Carte'
import Title from '../components/Title/Title'
import '../style/Skills.css'
import coding from '../assets/coding.jpg'
import marketing from '../assets/marketing.jpg'

function Skills () {
    return(
        <div className='skills' id="skills">
            <div className='page-container container'>
                <div className='container-top'>
                    <Title title={"Compétences"}
                    descrip={"Mes expériences professionnelles me permettent d'être aujourd'hui autonome, Polyvalent et de disposer des compétences techniques dont voici un aperçu :"}/>
                </div>
                <div className='container-under'>
                    <Carte img={coding} title={"Programme"} 
                        name1={"HTML/CSS"}
                        name2={"JavaScript"}
                        name3={"Node.js"}
                        name4={"React"}
                        name5={"Python"}
                        name6={"SQL/MongoDB"}
                    />
                    <Carte img={marketing} title={"Marketing digital"}
                        name1={"Google Analytics"}
                        name2={"Data Studio"}
                        name3={"SEO"}
                        name4={"Méthodologie agile"}
                        name5={"Stratégies marketing"}
                        name6={"E-commerce/social commerce"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;
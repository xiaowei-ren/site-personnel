import Galerie from "../components/Galerie/Galerie"
import Title from "../components/Title/Title"
import projet1 from "../assets/projet1.jpg"
import "../style/Projet.css"

function Projet() {
    return(
        <div className='projet'>
            <div className='projet-container container'>
                <Title title={"Projet"} descrip={"Projet informatique et projet du marketing"}/>
                <div className='galerie-layout'>
                    <Galerie img={projet1} title={"PROGRAMME"} descrip={"Développement d'un site de location de logement en React.js"}/>
                    <Galerie img={projet1} title={"Programme"} descrip={"Développement d'un site de location de logement en React.js"}/>
                </div>
            </div>
        </div>
    )
}

export default Projet;
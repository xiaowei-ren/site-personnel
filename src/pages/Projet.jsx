import Galerie from "../components/Galerie/Galerie"
import Title from "../components/Title/Title"
import projet1 from "../assets/projet1.jpg"

function Projet() {
    return(
        <div className='projet'>
            <Title />
            <Galerie img={projet1} title={"Programme"} descrip={"Développement d'un site de location de logement en React.js"}/>
        </div>
    )
}

export default Projet;
import Galerie from "../components/Galerie/Galerie"
import Title from "../components/Title/Title"
import "../style/Projet.css"
import { useEffect, useState } from "react"

function Projet() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        if (data.length === 0 && loading) {
            fetch('/site-personnel/data.json')
                .then(response => response.json())
                .then(data => {
                    setData(data.projects)
                    setLoading(false)
                })
                .catch(error => {
                    console.error(error)
                    setLoading(false)
                });
        }
    }, [loading])
    

    return(
        <div className='projet' id="projet">
            <div className='projet-container container'>
                <Title title={"Projets"} 
                    descrip={"Grâce à mon parcours en tant que developpeuse et à mon expérience dans le marketing, je connais le domaine digital sous plusieurs aspects. J'ai eu l'occasion de réaliser de multiples projets dans les différents domaines."}
                />
                <div className='galerie-layout'>
                    {data && data.length > 0 ? data.map((item, index) => {
                        return (
                            <Galerie
                                img={item.img}
                                title={item.title}
                                descrip={item.descrip}
                                url={item.link ? item.link : ''}
                                key={"projects-" + index}
                            />
                        )
                    }) : <></>}
                </div>
            </div>
        </div>
    )
}

export default Projet;
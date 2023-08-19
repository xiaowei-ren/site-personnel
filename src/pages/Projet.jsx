import Galerie from "../components/Galerie/Galerie"
import Title from "../components/Title/Title"
import projet1 from "../assets/projet1.jpg"
import "../style/Projet.css"
import { useEffect, useState } from "react"

function Projet() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        if (data.length === 0 && loading) {
            fetch('/data.json')
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
                <Title title={"Projet"} descrip={"Projet informatique et projet du marketing"}/>
                <div className='galerie-layout'>
                    {data && data.length > 0 ? data.map((item, index) => {
                        return (
                            <Galerie
                                img={item.img}
                                title={item.title}
                                descrip={item.descrip}
                                url={item.link}
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
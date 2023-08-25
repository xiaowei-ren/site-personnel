import Parcour from '../components/Parcour/Parcour'
import '../style/Experience.css'
import { useEffect, useState } from 'react'


function Experience (){
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        if (data.length === 0 && isLoading) {
            fetch('/site-personnel/data.json')
                .then(response => response.json())
                .then(data => {
                    setData(data.parcours)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.error(error)
                    setIsLoading(false)
                });
        }
    }, [isLoading])
    


    return(
        <div className='experience' id="experience">
            <div className='experience-container container'>
                <h2>Experience</h2>
                <div className='contenus-container'>
                    <Parcour
                        icon={data.experience ? data.experience.icon : null}
                        title={data.experience ? data.experience.title : null}
                        parcours={data.experience ? data.experience.items : []}
                        key={'experiences'}
                    />
                    <div className='line'></div>
                    <Parcour
                        icon={data.diplomes ? data.diplomes.icon : null}
                        title={data.diplomes ? data.diplomes.title : null}
                        parcours={data.diplomes ? data.diplomes.items : []}
                        key={'diplomes'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience;
import '../Parcour/Parcour.css'

function Parcour(props) {
    return(
        <div className='parcour-container'>
            <img src={props.icon} alt="icon-travaile" />
            <h3>{props.title}</h3>
            <div className='parcour-yayout'>
                <div className='parcour'>
                    <h4>{props.parcour1}</h4>
                    <p>{props.name1}</p>
                </div>
                <div className='parcour'>
                    <h4>{props.parcour2}</h4>
                    <p>{props.name2}</p>
                </div>
                <div className='parcour'>
                    <h4>{props.parcour3}</h4>
                    <p>{props.name3}</p>
                </div>
                <div className='parcour'>
                    <h4>{props.parcour4}</h4>
                    <p>{props.name4}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Parcour;
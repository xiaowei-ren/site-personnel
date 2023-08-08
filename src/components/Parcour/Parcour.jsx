import '../Parcour/Parcour.css'

function Parcour(props) {
    return(
        <div className='parcour-container'>
            <img src={props.icon} alt="icon-travaile" />
            <h3>{props.title}</h3>
            <ul>
                <li>{props.parcour1}</li>
                <li>{props.parcour2}</li>
                <li>{props.parcour3}</li>
            </ul>
        </div>
    )
}

export default Parcour;
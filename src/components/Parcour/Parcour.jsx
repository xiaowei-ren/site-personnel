import '../Parcour/Parcour.css'

function Parcour(props) {
    return(
        <div className='parcour-container'>
            <img src={props.icon} alt="icon-travaile" />
            <h3>{props.title}</h3>
            <div className='parcour-yayout'>
                { props.parcours && props.parcours.length > 0 ? props.parcours.map(item => {
                    return (
                        <div className='parcour' key={item.parcour}>
                            <h4>{item.parcour}</h4>
                            <p>{item.name}</p>
                        </div>
                    )
                }) : <></>}
            </div>
        </div>
    )
}

export default Parcour;
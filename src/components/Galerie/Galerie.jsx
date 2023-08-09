import "../Galerie/Galerie.css"

function Galerie(props) {
    return(
        <div className='galerie-container'>
            <div className='img-container'>
                <img src={props.img} alt="photo du projet" />
                <div className='masque'></div>
            </div>
            <div className='text-container'>
                <h4>{props.title}</h4>
                <p>{props.descrip}</p>
            </div>
        </div>
    )
}

export default Galerie;
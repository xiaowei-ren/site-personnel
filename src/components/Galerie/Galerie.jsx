function Galerie(props) {
    return(
        <div className='galerie-container'>
            <img src={props.img} alt="photo du projet" />
            <h4>{props.title}</h4>
            <p>{props.descrip}</p>
        </div>
    )
}

export default Galerie;
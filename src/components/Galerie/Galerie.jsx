import "../Galerie/Galerie.css"
import link from "../../assets/link.png"

function Galerie(props) {
    {/*ver les liens de github */}
    function openInNweTab(url) {
        window.open(url, "_blank", "noreferrer")
    };

    return(
        <div className='galerie-container'>
            <div className='img-container'>
                <img src={props.img} alt="photo du projet" />
                <div className='masque'></div>
            </div>
            {props.url !== "" ?
                <img className='lien' title="Cliquez pour voir plus de détails sur ce projet" src={link} alt="Lien du projet" onClick = {() => openInNweTab(props.url)}/>
                : <></>
            }
            <div className='text-container'>
                <h4>{props.title}</h4>
                <p>{props.descrip}</p>               
            </div>
        </div>
    )
}

export default Galerie;
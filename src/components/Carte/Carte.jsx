import '../Carte/Carte.css'

function Carte (props) {
    return(
        <div className='carte-container'>
            <img src={props.img} alt="icon-coding" />
            <h3>
                {props.title}
            </h3>
            <ul>
                <li>{props.name1}</li>
                <li>{props.name2}</li>
                <li>{props.name3}</li>
                <li>{props.name4}</li>
                <li>{props.name5}</li>
                <li>{props.name6}</li>              
            </ul>
        </div>
    )
}

export default Carte;
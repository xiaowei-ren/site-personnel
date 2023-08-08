import '../Carte/Carte.css'

function Carte (props) {
    return(
        <div className='carte-container'>
            <img src={props.img} alt="icon-coding" />
            <h3>
                {props.title}
            </h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.name}</li>
                <li>NoSQL(MongoDB)</li>
                <li>Python</li>
                <li>SQL(MySQL)</li>
            </ul>
        </div>
    )
}

export default Carte;
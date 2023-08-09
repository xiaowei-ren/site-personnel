import '../Title/Title.css';

function Title(props){
    return(
        <div className='title-container'>
                <h2>{props.title}</h2>
                <p>{props.descrip}</p>
        </div>
    )
}

export default Title;
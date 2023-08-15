import "../Nav/Nav.css"
import nav from "../../assets/nav.svg"

function Nav() {
    return(
        <div className="nav">
            <div className='nav-container'>
                <div className='nav-left'>Home</div>
                <div className='nav-right'>
                    <img src={nav} alt="menu de la navigation" />
                    <span>About me</span>
                    <span>Skills</span>
                    <span>Experience</span>
                    <span>Projets</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>       
    )
}

export default Nav;
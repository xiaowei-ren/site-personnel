import "../Header/Header.css"
import nav from "../../assets/nav.svg"

function Header() {
    {/*lien vers les selections */}
    function jump (id) {
        const releventDiv = document.getElementById(id);
                        releventDiv.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="header">
            <div className='nav-container'>
                <div className='nav-left' onClick={() => jump('home')}>Home</div>
                <div className='nav-right'>
                    <img src={nav} alt="menu de la navigation" />
                    <span onClick={() => jump('about')}>About me</span>
                    <span onClick={() => jump('skills')}>Skills</span>
                    <span onClick={() => jump('experience')}>Experience</span>
                    <span onClick={() => jump('projet')}>Projets</span>
                    <span onClick={() => jump('footer')}>Contact</span>
                </div>
            </div>
        </div>       
    )
}

export default Header;
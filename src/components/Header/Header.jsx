import "../Header/Header.css"
import nav from "../../assets/nav.svg"
import { useState } from "react";

function Header() {
    {/*lien vers les selections */}
    function jump (id, closeMenu = false) {
        const releventDiv = document.getElementById(id);
        releventDiv.scrollIntoView({behavior: "smooth"});
        if (closeMenu) setMenuOpen(false);
    }

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="header">
            <div className='nav-container'>
                <div className='nav-left' onClick={() => jump('home')}>Accueil</div>
                <div className='nav-right'>
                    <span onClick={() => jump('about',)}>Présentation</span>
                    <span onClick={() => jump('skills')}>Compétences</span>
                    <span onClick={() => jump('experience')}>Expériences</span>
                    <span onClick={() => jump('projet')}>Projets</span>
                    <span onClick={() => jump('footer')}>Contact</span>
                </div>
                <img src={nav} alt="menu de la navigation" 
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>
            <ul className={!menuOpen ? 'close' : ''}>
                <li onClick={() => jump('about', true)}>Présentation</li>
                <li onClick={() => jump('skills', true)}>Compétences</li>
                <li onClick={() => jump('experience', true)}>Expériences</li>
                <li onClick={() => jump('projet', true)}>Projets</li>
                <li onClick={() => jump('footer', true)}>Contact</li>
            </ul>
        </div>       
    )
}

export default Header;
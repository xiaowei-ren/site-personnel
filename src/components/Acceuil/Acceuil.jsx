import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import illustration from '../../assets/illustration.svg';
import '../Acceuil/Acceuil.css';
import copy from 'copy-to-clipboard';
import { useState } from 'react';
import CV from "../../../public/CV.pdf"

function Acceuil () {

    const [showMessage, setShowMessage] = useState(false)

    {/*ver les liens du linkedin et du github */}
    function openInNweTab(url) {
        window.open(url, "_blank", "noreferrer")
    };
    
    return(
        <div className='home' id="home">
            <div className='home-container container'>
                 <div className='home-container--left'>
                    <div className='home-container--left---text'>
                        <p className='home-container--left---text1'>Bonjour, je suis</p>
                        <h2 className='home-container--left---title'>Xiaowei Ren</h2>
                        <p className='home-container--left---text2'>Développeuse Full-Stack / Experte en e-commerce et maketing digital</p>
                    </div>
                    <button>TELECHARGER CV</button>
                    <div className='home-container--left---icon'>
                        <img src={email} alt="email" onClick = {() => {
                            copy('xiaoweiren123@gmail.com');
                            setShowMessage(true)
                            setTimeout(() => setShowMessage(false), 2000)
                        }} />
                        <img src={github} alt="github" onClick = {() => openInNweTab("https://github.com/xiaowei-ren")}/>
                        <img src={linkedin} alt="linkdin" onClick = {() => openInNweTab("https://www.linkedin.com/in/xiaowei-ren/")}/>
                    </div>
                    {/* avertir de la message d'mail */}
                    { showMessage ? 
                        <div className='message'>L'adresse mail a été copié</div> 
                        : 
                        <></>
                    }
                </div>
                <div className='home-container-right'>
                    <img src={illustration} alt="home page illustration" />
                </div>
            </div>
        </div>
    )  
}

export default Acceuil
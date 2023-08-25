import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import illustration from '../../assets/illustration.svg';
import '../Acceuil/Acceuil.css';
import copy from 'copy-to-clipboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <p className='home-container--left---text2'>Développeuse web Full-Stack <br/> Experte en e-commerce et maketing digital</p>
                    </div>
                    <Link to="/site-personnel/files/CV.pdf" target='_blank' className='link'>TÉLÉCHARGEZ MON CV</Link>
                    <div className='home-container--left---icon'>
                        {/* copier l'adresse mail */}
                        <img src={email} alt="email" title="Obtenez mon adresse mail" onClick = {() => {
                            copy('xiaoweiren123@gmail.com');
                            setShowMessage(true)
                            setTimeout(() => setShowMessage(false), 2000)
                        }} />
                        <img src={github} alt="github" title="Suivez-moi sur Github" onClick = {() => openInNweTab("https://github.com/xiaowei-ren")}/>
                        <img src={linkedin} alt="linkdin" title="Ajoutez-moi sur LinkedIn" onClick = {() => openInNweTab("https://www.linkedin.com/in/xiaowei-ren/")}/>
                    </div>
                    {/* avertir du message d'email */}
                    { showMessage ? 
                        <div className='message'>L'adresse mail a été copiée !</div> 
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
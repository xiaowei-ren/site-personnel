import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import illustration from '../../assets/illustration.svg';
import '../Acceuil/Acceuil.css';

function Acceuil () {
    return(
        <div className='home-container'>
            <div className='home-container--left'>
                <div className='home-container--left---text'>
                    <p className='home-container--left---text1'>Hi, I am</p>
                    <h2 className='home-container--left---title'>Xiaowei Ren</h2>
                    <p className='home-container--left---text2'>I am a front-end developer and digital marketing expert. Nice to meet you !</p>
                </div>
                <button>DOWNLOAD CV</button>
                <div className='home-container--left---icon'>
                    <img src={email} alt="email" />
                    <img src={github} alt="github" />
                    <img src={linkedin} alt="linkdin" />
                </div>
            </div>
            <div className='home-container-right'>
                <img src={illustration} alt="home page illustration" />
            </div>
        </div>
    )  
}

export default Acceuil
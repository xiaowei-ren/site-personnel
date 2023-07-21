import '../About/About.css'
import weiwei from '../../assets/weiwei.jpg'

function About() {
    return(
        <div className='about-container'>
            <div className='about-container-left'>
                <h2>Xiaowei REN</h2>
                <h3>Développeuse Full-Stack + Experte en e-commerce et maketing digital</h3>
                <p>Apres avoir obtenu mon diplôme "Développement web", je cherche actuellement à appliquer mes compétences techniques acquises (HTML, CSS, JavaScript, Node.js, React) en tant que developeuse web. Grâce à mon parcours et à mon expérience dans le marketing digital, je connais le développement sous plusieurs aspects , ce qui me permet de travailler sur les plusieurs phases d'un projet.</p>
                {/*icon*/}
                <img src="" alt="" />
            </div>
            <div className='about-container-right'>
                <img src={weiwei} alt="proflit photo" className='about-img' />
            </div>
        </div>
    )
}

export default About;
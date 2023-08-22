import '../About/About.css'
import weiwei from '../../assets/weiwei.jpg'

function About() {
    {/*lien vers les selections */}
    function jump (id) {
        const releventDiv = document.getElementById(id);
                        releventDiv.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className='about' id="about">
            <div className='about-container'>
                <div className='about-container-left'>
                    <img src={weiwei} alt="proflit photo" className='about-img' />
                </div>
                <div className='about-container-right'>
                    <h2>Présentation</h2>
                    <div>
                        <p>Basé à Paris, je me suis reconverti dans le développement web après avoir travaillé de nombreuses années dans le domaine du marketing digital.</p>
                        <p>
                        J'ai toujours aimé le domaine numérique et je veux y contribuer en créant des produits de valeur pour tout le monde.
                        </p>
                        <p>De plus, j'aime faire la cuisine chinoise, les beaux paysages et les musées.</p>
                    </div>
                    <button onClick={() => jump('skills')}>COMPÉTENCES</button>
                </div>
            </div>
        </div>
    )
}

export default About;
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
                        <p>Basée à Paris, je me suis reconvertie dans le développement web après avoir travaillé de nombreuses années dans le domaine du marketing digital.</p>
                        <p>
                        J'ai toujours aimé le domaine du numérique et je veux y contribuer en créant des produits utiles au plus grand nombre.
                        </p>
                        <p>Concernant mes passions, j'aime la natation, les beaux paysages et les musées.</p>
                    </div>
                    <button onClick={() => jump('skills')}>COMPÉTENCES</button>
                </div>
            </div>
        </div>
    )
}

export default About;
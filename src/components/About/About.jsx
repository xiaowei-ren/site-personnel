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
                    <h2>About me</h2>
                    <div>
                        <p>Based in Paris, I reconverted myself in web development after working many years in digital marketing area.</p>
                        <p>
                            I always loved digital word and I want to contribute to it by making valuable products for everyone.
                        </p>
                        <p>Besides, I love Chinese food, beautiful landscapes and museums.</p>
                    </div>
                    <button onClick={() => jump('skills')}>SKILLS</button>
                </div>
            </div>
        </div>
    )
}

export default About;
import linkedin2 from "../../assets/linkedin2.svg"
import mail from "../../assets/mail.svg"
import "../Footer/Footer.css"

function Footer() {
    {/*ver le lien du linkedin */}
    function openInNweTab(url) {
        window.open(url, "_blank", "noreferrer")
    };

    return(
        <div className='footer' id="footer">
            <div className='footer-container'>
                <p className='title'>CONTACTEZ-MOI</p>
                <div className='icon'>
                    <img src={linkedin2} alt="icon-linkedin" onClick = {() => openInNweTab("https://www.linkedin.com/in/xiaowei-ren/")}/>
                    <img src={mail} alt="icon-email" />
                </div>
                <p className='date'>©2023 Xiaowei Ren All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
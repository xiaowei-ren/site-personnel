import linkedin2 from "../../assets/linkedin2.svg"
import mail from "../../assets/mail.svg"
import "../Footer/Footer.css"

function Footer() {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <p>CONTACT-MOI</p>
                <div className='icon'>
                    <img src={linkedin2} alt="icon-linkedin" />
                    <img src={mail} alt="icon-email" />
                </div>
                <p className='date'>@2023 Xiaowei Ren All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
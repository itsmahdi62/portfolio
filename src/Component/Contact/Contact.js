 import {GrMail , GrPhone, GrLocation } from "react-icons/gr"
import "./Contact.scss"
 const Contact = () => {
    return ( <div className="contact">
    <div className="contact-heading">
        <h2>CONTACT WITH ME...</h2>
        <div className="bottom-line"></div>
    </div>
    <div className="contact-flex">
            <div>
                <GrLocation size={40} />
                <h3>Location</h3>
                <p>Tehran , Iran</p>
            </div>

            <div>
                <GrMail size={ 40} />
                <h3>Email</h3>
                <p>amiralmasi021@gmail.com</p>
            </div>

            <div>
                <GrPhone size={40} />
                <h3>Phone</h3>
                <p>+98-9124154066</p>
            </div>
        </div>
    </div>);
}
 
export default Contact;
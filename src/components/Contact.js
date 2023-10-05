import React from 'react';
import contact from '../assets/images/contact.png';


const Contact = () => {
    return(
        <>
        <section className='contact_section'>
            <div className='contact_content'>
                <img src={contact} className='img_contact'/>
                <div className='contact'>
                <h3 className='contact_title'>Stam in contact</h3>
                <p className='text_contact'>Aboneaza-te la newsletter.</p>
                <p className='text_contact'>Fara spam,promitem.</p>    
                </div>
                
                
            </div>

        </section>
        </>
    )
}

export default Contact;
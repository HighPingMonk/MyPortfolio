import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className='foter' id='footer' >



            <div className='touch' >
                <h2 className='touchtext' >Don’t be a stranger</h2>
                <h3 className='touchtext2' >just say hello.</h3>
                <p style={{ width: '100%' }} >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <p  >Need help?</p> 
                 <span className="far fa-envelope">{'   '}  seekpratik14@gmail.com</span>
                <p className='mt2'  >Feel like talking ?</p>

                <span className="fab fa-whatsapp "  >{'   '}  +91-9370498645</span>
                <p className='mt2'  > Want to Hire me?</p>
                <span className="fab fa-linkedin"     >{'         '}www.linkedin.com/in/seekpratik14</span>
            <div className='colz-icon'>

            <a href="https://www.facebook.com/profile.php?id=100012133909322">
          <i className="fa fa-facebook-square"></i>
          </a>            
          <a href="https://www.instagram.com/_paartik/">
          <i className="fa fa-instagram"></i>
          </a>            
          <a href="https://twitter.com/Paartikhere">
          <i className="fa fa-twitter"></i>
          </a>   




            </div>
            </div>

        </div>
    )
}

export default Footer;

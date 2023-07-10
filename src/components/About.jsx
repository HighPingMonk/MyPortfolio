import React from 'react'
import './about.css';
import {ReactComponent as Abot} from './images/abot.svg';
import ReactRotatingText from 'react-rotating-text';

const About = () => {
    return (
        <div className='aboutt' id='about' >
        <div>
                 <Abot className='aboutsvg' />
            
           
        </div>
        <div className='me br4' >
             <h2 className='text' >Hey! I'm Pratik, Adept at developing creative and functional web pages, an enthusiastic Web Developer who loves to solve real-world problems, and is seeking to find the opportunity to work in a fun and challenging working environment that will encourage me to improve and learn new and necessary skills.I love adventures & taking risks so every second I search for a new thing 
               to do which will help me open up for new opportunities as well as teach me new ideas about life. I am someone who is consistently growing themselves and who takes the time to continue learning and keep improving myself. I take responsibility for my actions.<br></br>
                <h6>
                    <ReactRotatingText
                    
                    items={['“What we do in life echoes in eternity.”, we need to look at the impact we are making on others']}
                    color={'black'}
                    typingInterval={80}
                    pause={4000}
            
                    />
                    </h6>
             In the end, I am on a journey to never stop learning.</h2>
        </div>
        

        </div>
    )
}

export default About;

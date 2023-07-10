import React from 'react'
import './main.css'
import ReactRotatingText from 'react-rotating-text';


const Main = () => {
  return (
    <div>
      
      <div className='writ' >
                <span style={{ color: 'black'}} className='hy' > Hey, </span>
                <span style={{ color: 'black' }} className='hy' > I'm Pratik! </span>  <br />
                <br />
                {/* <span style={{ color: ' black' }} className='senior' >Jr. full stack web developer</span> */}
            

                <ReactRotatingText
                    className='blink'

                    items={['Enthusisatic developer.',
                    'Jr. Java developer',
                    'Jr. React.js developer',
                   'Jr. Java full stack web developer',

                
                ]}
                    color={'black'}
                    typingInterval={50}
                    pause={2000}
                />

            </div>
    </div>
  )
}

export default Main

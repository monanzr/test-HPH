import React, { useState, useEffect } from 'react'
import './Animation.css'

const Animation = ()=> {
    const [img, setImg] = useState(<img src={require('./img/bik.png')} className='bike' alt='bike'/>    );

  
    useEffect(() => {
        // Helper function to create delay
        const sleep = async (milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds)
            });
        };
        // Loop for animation
        setInterval(() => {
            // Remove and add <img> after delay
            const imgSleep = async () => {
                setImg('')
                await sleep(0);
                setImg(img)
            }
            imgSleep();
        }, 5000);
    }, [img]);

    

  return (
    <div className='box'>
        <img src={require('./img/bg.png')} className='background' alt='background'/>
        {img}
    </div>
  )
}

export default Animation;


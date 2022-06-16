import Image from 'next/image'
import React from 'react'

export default function Index() {

    const imageStyle = {
        // padding: 'auto',
        borderRadius: '10px'
    }

  return (
    <div className='aboutBV'>
        <div className='d-flex justify-content-around align-items-center'>
            <div className='d-flex justify-content-center align-items-start flex-column content'>
                <div className='title h1'>
                    <p>Who we are?</p>
                </div> 
                <div className='text'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum facere, est neque iure cumque iusto voluptatibus dolore officiis off.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum facere, est neque iure cumque iusto voluptatibus dolore officiis off.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum facere, est neque iure cumque iusto voluptatibus dolore officiis off.</p>
                </div>
            </div>
            <div className='content'>
                <Image
                    src="/Images/Team.png"
                    width={1050}
                    height={850}
                    style={imageStyle}
                />
            </div>
        </div>
    </div>
  )
}

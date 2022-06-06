import Image from 'next/image'
import React from 'react'

export default function BV() {

    const imageStyle = {
        padding: 'auto',
        borderRadius: '10px'
    }

  return (
    <div className='aboutBV'>
        <div className='d-flex justify-content-around align-items-center'>
            <div className='d-flex justify-content-center align-items-start flex-column'>
                <div>
                    <p>Who we are?</p>
                </div> 
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum facere, est neque iure cumque iusto voluptatibus dolore officiis off.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum facere, est neque iure cumque iusto voluptatibus dolore officiis off.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum facere, est neque iure cumque iusto voluptatibus dolore officiis off.</p>
                </div>
            </div>
            <div>
                <Image
                    src="/Images/Team.png"
                    width={600}
                    height={450}
                    style={imageStyle}
                />
            </div>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import { Button } from 'reactstrap'

export default function BV() {
    const imageStyle = {
        padding : 'auto'
    }
  return (
    <div className='applyBV'>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-center align-items-start flex-column applyFirst'>
                <div>
                    <p className='title h1'>
                        How To Apply For Career?
                    </p>
                </div>    
                <div className='text'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatum corporis voluptates po.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatum corporis voluptates po.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatum corporis voluptates po.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatum corporis voluptates po.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatum corporis voluptates po.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatum corporis voluptates po.
                    </p>
                </div>    
                <div>
                    <p><Button className='applyButton'>Apply Now</Button></p>
                </div>    
            </div>
            <div>
                <Image
                    src="/Images/location.png"
                    width={600}
                    height={500}
                    style={imageStyle}
                />
            </div>
        </div>
    </div>
  )
}

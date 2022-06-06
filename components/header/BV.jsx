import React from 'react'
import Image from 'next/image'
import { Button } from 'reactstrap'

export default function BV() {

    const homeCarStyle = {
        padding : "auto"
    }

  return (
    <div className='HeaderBV'>
    <div className='d-flex justify-content-between align-items-center'>
        <div className='HomeLogo'>
        <Image 
            src="/Images/logos/normal.png"
            width={280}
            height={150}
            style={homeCarStyle}
            />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <div className="m-4">
                <p>About us</p>
            </div>
            <div className="m-4">
                <p>Articles</p>
            </div>
            <div className="m-4">
                <p>Gallery</p>
            </div>
            <div className="m-4">
                <p>Career</p>
            </div>
            <div className="m-4">
                <p>Events</p>
            </div>
            <div className="m-4">
                <p><Button className='ContactButton'>Contact us</Button></p>
            </div>
        </div>
    </div>
    </div>
  )
}

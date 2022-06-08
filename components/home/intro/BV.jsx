import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from 'reactstrap'

export default function BV() {
    const imageStyle = {
        padding : "auto"
    }
  return (
    <div className='IntroBV'>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-start align-items-start flex-column IntroFirst'>
            <div>
                <p className='h1 introTitle'>Innovation comes from experiments</p>
            </div>
            <div>
                <p className='introText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur aliquam vero aliquid quo provident voluptatum nihil.</p>
            </div>
            <div>
                <p>
                    <Link href="/about">
                        <Button className='aboutButton'>ABOUT US</Button>
                    </Link>
                </p>
            </div>
        </div>
        <div>
            <Image
                src="/Images/home_car.png"
                width={1250}
                height={775}
                style={imageStyle}  
            />
        </div>
        </div>
    </div>
  )
}

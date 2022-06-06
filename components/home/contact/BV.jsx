import Image from 'next/image'
import React from 'react'
import { Button } from 'reactstrap'


export default function BV() {

    // const img = "/Images/contact_banner.png";

    // <style JSX>{`
    // .homeContactBV {
    //     width:100%;
    //     height:100%;
    //     position:absolute;
    //     background: url('`+img+`') no-repeat;
    // }
    // `}</style>

    // const bgImageStyle = {
    //     backgroundImage: 'url("/Images/contact_banner.png")',
    //     backgroundSize: 'cover',
    //     backgroundAttachment: 'fixed',
    //     backgroundRepeat: 'no-repeat'
    // }

    const imageStyle = {
        width: '100vw',
        height: '75vh',
        margin: 0,
        padding: 0
    }

  return (
    <div className='homeContactBV' >
        <div>
            <img
                src="/Images/contact_banner.png"
                // width={1000}
                // height={500}
                // layout='fill'
                // objectFit='cover'
                // quality={100}
                style={imageStyle}
            />
        </div>
        <div className='d-flex justify-content-end align-items-start'>
        <div className='d-flex justify-content-center align-items-start flex-column cardSection'>
            <div>
                <p>Contact Us</p>   
            </div>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio sed architecto sequi voluptatum eligendi corrupti illo maiores adipisci veritatis, totam iste quaerat nam voluptas delectus ea fugiat incidunt porro.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio sed architecto sequi voluptatum eligendi corrupti illo maiores adipisci veritatis, totam iste quaerat nam voluptas delectus ea fugiat incidunt porro.
                </p>
            </div>
            <div>
                <Button className='homeContactButton'>Contact Now.</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

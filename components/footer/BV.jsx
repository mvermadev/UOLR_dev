import Image from 'next/image'
import React from 'react'

export default function BV() {

    const logoStyle = {
        padding: 'auto'
    }

    const iconStyle = {
        padding: 'auto'
    }

  return (
    <div className='FooterBV'>
    <div className='d-flex justify-content-center flex-column'>
            <div className='d-flex justify-content-around align-items-start'>
                <div>
                    {/* logo */}
                    <Image
                        src="/Images/logos/bigger.png"
                        width={360}
                        height={180}
                        style={logoStyle}
                    />
                </div>
                <div className='list'>
                    {/* home list */}
                    <p className='listHead'>Home</p>
                    <p>About Us</p>
                    <p>Articles</p>
                    <p>Gallery</p>
                    <p>Career</p>
                    <p>Events</p>
                    <p>Contact Us</p>
                </div>
                <div className='list'>
                    {/* contact details */}
                    <p className='listHead'>Contact Details</p>
                    <p>+44 (123) 456 78 90</p>
                    <p>+44 (123) 456 78 90</p>
                    <p>+44 (123) 456 78 90</p>
                    <p>+44 (123) 456 78 90</p>
                    <div className='d-flex align-items-center'> 
                        <p>
                            <Image
                                src="/Images/icons/call.svg"
                                width={16}
                                height={16}
                            />
                        </p>
                        &nbsp;&nbsp;
                        <p> +44 (123) 456 78 90</p>
                    </div>
                    <div className='d-flex align-items-center'> 
                        <p>
                            <Image
                                src="/Images/icons/location.svg"
                                width={20}
                                height={20}
                            />
                        </p>
                        &nbsp;&nbsp;
                        <p className='addressText'> Univeristy of Leicester Racing team garage,<br></br> University Road LE1 7RH Leicester, UK.</p>
                    </div>
                </div>
                <div className='list'>
                    {/* sm */}
                    <p className='listHead'>Social Media</p>
                    <div className='d-flex justify-content-start align-items-start'>
                        <div className='m-1'>
                            <Image
                                src="/Images/icons/fb.svg"
                                width={25}
                                height={25}
                                style={iconStyle}
                            />
                        </div>
                        <div className='m-1'>
                            <Image
                                src="/Images/icons/insta.svg"
                                width={25}
                                height={25}
                                style={iconStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        <div className='borderLine'></div>
        <div className='d-flex justify-content-center rightText'>
            <p>Copyright © University of Leicester Racing 2022. All rights reserved.</p>
        </div>
    </div>
    </div>
  )
}

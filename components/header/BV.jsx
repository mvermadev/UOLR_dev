import React from 'react'
import Image from 'next/image'
import { Button } from 'reactstrap';
import Link from 'next/link';


export default function BV(props) {
    const {page} = props
    
    const homeCarStyle = {
        padding : "auto"
    }

    const clickedStyle = {
        color: '#FF3636',
        fontWeight: 'bold',
    }

  return (
    <div className='HeaderBV'>
    <div className='d-flex justify-content-between align-items-center'>
        <div className='HomeLogo'>
            <Link href="/">
                <Image 
                    src="/Images/logos/normal.png"
                    width={280}
                    height={150}
                    style={homeCarStyle}
                />
            </Link>
        </div>
        <div className='d-flex justify-content-between align-items-center options'>
            <div className="m-4">
                <Link href="/about">
                    {
                        page == 'about' ? <p className='option' style={clickedStyle}>About us</p> : <p className='option'>About us</p>
                    }
                </Link>
            </div>
            <div className="m-4">
                <Link href="/articles">
                    {
                        page == 'articles' ? <p className='option' style={clickedStyle}>Articles</p> : <p className='option'>Articles</p>
                    }
                </Link>
            </div>
            <div className="m-4">
                <Link href="/gallery">
                    {
                        page == 'gallery' ? <p className='option' style={clickedStyle}>Gallery</p> : <p className='option'>Gallery</p>
                    }
                </Link>
            </div>
            <div className="m-4">
                <Link href="/career">
                    {
                        page == 'career' ? <p className='option' style={clickedStyle}>Career</p> : <p className='option'>Career</p>
                    }
                </Link>
            </div>
            <div className="m-4">
                <Link href="/event">
                    {
                        page == 'event' ? <p className='option' style={clickedStyle}>Events</p> : <p className='option'>Events</p>
                    }
                </Link>
            </div>
            <div className="m-4">
                <p><Button className='ContactButton'>Contact us</Button></p>
            </div>
        </div>
    </div>
    </div>
  )
}

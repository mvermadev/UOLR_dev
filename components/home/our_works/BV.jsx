import Image from 'next/image'
import React from 'react'

export default function BV() {

    const data = [
        {
            title: '2016 Car Modile Launched',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.',
            ImgUrl: '/Images/event1.png'
        }
    ]

    const imageStyle = {
        padding : 'auto',
        borderRadius: '0 7px 7px 0'
    }
  return (
    <div className='ourWorksBV'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <div className='d-flex justify-content-center align-items-center flex-column contentFirst'>
                <div>
                    <p className='h1'>Our Works</p>
                </div>
                <div>
                    <p className='workText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus incidunt in. Deleniti ipsa temporibus soluta ducimus similique, dolor excepturi.</p>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between cardSection'>
                        <div className='d-flex justify-content-between flex-column singleCard'>
                            <div>
                                <p className='cardTitle'>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={550}
                                height={835}
                                style={imageStyle}
                                className="cardImg"
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between cardSection'>
                        <div className='d-flex justify-content-between flex-column'>
                            <div>
                                <p className='cardTitle'>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={550}
                                height={835}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-between cardSection'>
                        <div className='d-flex justify-content-between flex-column'>
                            <div>
                                <p className='cardTitle'>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={550}
                                height={835}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between cardSection'>
                        <div className='d-flex justify-content-between flex-column'>
                            <div>
                                <p className='cardTitle'>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p className='cardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={550}
                                height={835}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

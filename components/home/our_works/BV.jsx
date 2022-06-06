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
        padding : 'auto'
    }
  return (
    <div className='ourWorksBV'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div>
                    <p>Our Works</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus incidunt in. Deleniti ipsa temporibus soluta ducimus similique, dolor excepturi.</p>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center cardSection'>
                        <div className='d-flex justify-content-start align-items-start flex-column'>
                            <div>
                                <p>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={200}
                                height={400}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center cardSection'>
                        <div className='d-flex justify-content-start align-items-start flex-column'>
                            <div>
                                <p>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={100}
                                height={200}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-between align-items-center cardSection'>
                        <div className='d-flex justify-content-start align-items-start flex-column'>
                            <div>
                                <p>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={100}
                                height={200}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center cardSection'>
                        <div className='d-flex justify-content-start align-items-start flex-column'>
                            <div>
                                <p>2016 Car Modile Launched</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt exercitationem nostrum nihil, ad.</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/Images/event1.png"
                                width={100}
                                height={200}
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

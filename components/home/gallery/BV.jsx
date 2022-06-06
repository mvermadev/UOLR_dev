import Image from 'next/image'
import React from 'react'
// import {Carousel, CarouselIndicators, CarouselItem, CarouselControl, CarouselCaption} from 'reactstrap'
import { Carousel } from 'react-responsive-carousel';


export default function BV() {
  return (
    <div className='galleryBV'>
        <div className='d-flex justify-content-center align-items-center flex-column AllSections'>
            <div>
                <p>Gallery</p>
            </div>
            <div>
            <Carousel>
                  <div>
                    <Image
                        src="/Images/Machine1.png"
                        alt="image1"
                        width={900}
                        height={600}
                    />
                      {/* <p className="legend">Image 1</p> */}
                  </div>
                  <div>
                    <Image
                        src="/Images/Machine2.png"
                        alt="image1"
                        width={900}
                        height={600}
                    />  
                  </div>
                  <div>
                    <Image
                        src="/Images/Machine3.png"
                        alt="image1"
                        width={900}
                        height={600}
                    />
                  </div>
                  <div>
                    <Image
                        src="/Images/Machine4.png"
                        alt="image1"
                        width={900}
                        height={600}
                    />
                  </div>
                  <div>
                    <Image
                        src="/Images/Machine1.png"
                        alt="image1"
                        width={900}
                        height={600}
                    />
                  </div>
              </Carousel>
            </div>
        </div>
    </div>
  )
}

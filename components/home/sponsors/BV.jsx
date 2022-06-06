import Image from 'next/image'
import React from 'react'

export default function BV() {
    const imageStyle = {
        padding : 'auto'
    }

  return (
    <div className='sponsorsBV'>
        <div className='d-flex justify-content-around align-items-center'>
            <div className='d-flex justify-content-center align-items-start flex-column sponsorFirst'>
                <div>
                    <p>
                        Our sponsors
                    </p>    
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque nesciunt dignissimos rerum ipsam culpa, tempore mollitia enim .</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sit explicabo voluptate magni. Minima quod laudantium enim.</p> 
                </div>
            </div>
            <div>
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor1.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor2.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor3.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor4.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor5.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor6.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor8.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor9.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                            <td>
                                <Image
                                    src="/Images/Sponsors/sponsor10.png"
                                    width={200}
                                    height={80}
                                    style={imageStyle}
                                />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}

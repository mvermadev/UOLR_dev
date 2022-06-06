import Image from 'next/image'
import React from 'react'

export default function BV(props) {

  const {
    id,
    date,
    month,
    year,
    title,
    time,
    venue
  } = props

  return (
    <div className='eventCardBV'>
      <div className='d-flex justify-content-start flex-column cardSection p-3'>
        <div className='date'>
          <p>{date}</p>
        </div>
        <div className='month'>
          <p>{month} {year}</p>
        </div>
        <br></br>
        <br></br>
        <div className='title'>
          <p> {title} </p>
        </div>
        <br></br>
        <div className='time'>
          <p> {time} </p>
        </div>
        <div className='d-flex justify-content-start align-items-center venue'>
          <div>
            <Image
              src="/Images/icons/locationCard.svg"
              width={17}
              height={17}
            />
          </div>
          &nbsp;&nbsp;
          <div>
            <p>
              {venue.slice(0,15)} <br></br>
              {venue.slice(15)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

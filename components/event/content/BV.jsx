import React, {useState} from 'react'
import EventCard from '../../eventCard'

export default function BV(props) {

    const [showNewEvents, setShowNewEvents] = useState(true);


    const NewEventsData = [
        {
            date: '9th',
            month: 'January',
            year: '2021',
            title: 'Formula Ceremony',
            time: '1:30 PM - 5:00 PM',
            venue: `Charles Wilson Building - UOL`
        },
        {
            date: '20th',
            month: 'January',
            year: '2021',
            title: 'Formula Ceremony',
            time: '1:30 PM - 5:00 PM',
            venue: `Charles Wilson Building - UOL`
        },
        {
            date: '23th',
            month: 'January',
            year: '2021',
            title: 'Formula Ceremony',
            time: '1:30 PM - 5:00 PM',
            venue: `Charles Wilson Building - UOL`
        },
    ]

    const PastEventsData = [
        {
            date: '2nd',
            month: 'January',
            year: '2021',
            title: 'Formula Ceremony',
            time: '1:30 PM - 5:00 PM',
            venue: `Charles Wilson Building - UOL`
        },
        {
            date: '3rd',
            month: 'January',
            year: '2021',
            title: 'Formula Ceremony',
            time: '1:30 PM - 5:00 PM',
            venue: `Charles Wilson Building - UOL`
        },
        {
            date: '4th',
            month: 'January',
            year: '2021',
            title: 'Formula Ceremony',
            time: '1:30 PM - 5:00 PM',
            venue: `Charles Wilson Building - UOL`
        },
    ]

    const clickedStyle = {
        color: '#FF3636',
        fontWeight: 'bold'
    }

  return (
    <div className='eventBV m-4'>
        <div className='d-flex justify-content-center flex-column'>
            <div className="d-flex justify-content-center">
                <div className='heading' onClick={()=>setShowNewEvents(true)}>
                    <p>Upcoming Events</p> 
                </div>
                <div className='heading' onClick={()=>setShowNewEvents(false)}>
                    <p>
                        Past Events
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-around align-items-start m-4'>
                {
                    showNewEvents == true ? NewEventsData.map((data,id)=>(
                        <EventCard 
                            id={id}
                            date={data.date}
                            month={data.month}
                            year={data.year}
                            title={data.title}
                            time={data.time}
                            venue={data.venue}                        
                        />
                    )) :
                    PastEventsData.map((data,id)=>(
                        <EventCard 
                            id={id}
                            date={data.date}
                            month={data.month}
                            year={data.year}
                            title={data.title}
                            time={data.time}
                            venue={data.venue}                        
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

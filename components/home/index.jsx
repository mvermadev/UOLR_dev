import React from 'react'
import Header from '../header'
import Intro from './intro'
import OurWorks from './our_works'
import Sponsors from './sponsors'
import Apply from './apply'
import Gallery from './gallery'
import HomeContact from './contact'
import Footer from '../footer'

export default function Index() {
  return (
    <div>
      <div>
        <Header page="home"/>
      </div>
      <div>
        <Intro/>
      </div>
      <div>
        <OurWorks/>
      </div>
      <div>
        <Sponsors/>
      </div>
      <div>
        <Apply/>
      </div>
      <div>
        <Gallery/>
      </div>
      <div>
        <HomeContact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

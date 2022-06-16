import React from 'react'
import BVContent from '../BV'
import MVContent from '../MV'
import Header from '../../header'
import Footer from '../../footer'
import {BrowserView, MobileView} from 'react-device-detect'


export default function Index() {
  return (
    <div>
      <BrowserView>
        <div>
            <Header page="event"/>
        </div>
        <div>
            <BVContent/>
        </div>
        <div>
            <Footer/>
        </div>
      </BrowserView>

      <MobileView>
        <div>
            <Header page="event"/>
        </div>
        <div>
            <MVContent/>
        </div>
        <div>
            <Footer/>
        </div>
      </MobileView>
    </div>
  )
}

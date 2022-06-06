import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect'
import BV from './BV'
import MV from './MV'

export default function Index() {
  return (
    <div>
      <BrowserView>
        <BV/>
      </BrowserView>
      <MobileView>
        <MV/>
      </MobileView>
    </div>
  )
}
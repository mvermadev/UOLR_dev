import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect'
import BV from './BV'
import MV from './MV'

export default function Index(props) {
  return (
    <div>
      <BrowserView>
        <BV {...props}/>
      </BrowserView>
      <MobileView>
        <MV {...props}/>
      </MobileView>
    </div>
  )
}

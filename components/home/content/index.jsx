import React from 'react'
import Header from '../../header'
import BVIntro from '../BV/intro'
import BVOurWorks from '../BV/our_works'
import BVSponsors from '../BV/sponsors'
import BVApply from '../BV/apply'
import BVGallery from '../BV/gallery'
import BVHomeContact from '../BV/contact'
import MVIntro from '../MV/intro'
import MVOurWorks from '../MV/our_works'
import MVSponsors from '../MV/sponsors'
import MVApply from '../MV/apply'
import MVGallery from '../MV/gallery'
import MVHomeContact from '../MV/contact'
import Footer from '../../footer'
import {BrowserView, MobileView} from 'react-device-detect'


export default function Index() {
  return (
    <div>
      <BrowserView>
        <div>
            <Header page="home"/>
        </div>
        <div>
            <BVIntro/>
        </div>
        <div>
            <BVOurWorks/>
        </div>
        <div>
            <BVSponsors/>
        </div>
        <div>
            <BVApply/>
        </div>
        <div>
            <BVGallery/>
        </div>
        <div>
            <BVHomeContact/>
        </div>
        <div>
            <Footer/>
        </div>
      </BrowserView>

      <MobileView>
        <div>
            <Header page="home"/>
        </div>
        <div>
            <MVIntro/>
        </div>
        <div>
            <MVOurWorks/>
        </div>
        <div>
            <MVSponsors/>
        </div>
        <div>
            <MVApply/>
        </div>
        <div>
            <MVGallery/>
        </div>
        <div>
            <MVHomeContact/>
        </div>
        <div>
            <Footer/>
        </div>
      </MobileView>
    </div>
  )
}

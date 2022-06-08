import React from 'react'
import Content from './content'
import Header from '../header'
import Footer from '../footer'

export default function Index() {
  return (
    <div>
       <div>
            <Header page="articles"/>
        </div>
        <div>
            <Content/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

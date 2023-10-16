import React, { Component } from 'react'
import HomeNav from '../HomeScrComp/HomeNav'
import Allnews from '../NewsScrComp/Allnews'

export default class News extends Component {
  render() {
    return (<>
        <HomeNav/>
        <Allnews/>
    </>
    )
  }
}

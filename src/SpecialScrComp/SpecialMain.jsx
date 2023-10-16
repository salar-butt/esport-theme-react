import React, { Component } from 'react'
import AllNews from '../HomeScrComp/AllNews'
import HomePage from '../HomeScrComp/HomePage'

export default class SpecialMain extends Component {
  render() {
    return (<>
    <HomePage/>
    <hr style={{width:"85%",position:"relative",left:"7.5%"}} />
    <AllNews/>
    
    </>
    )
  }
}

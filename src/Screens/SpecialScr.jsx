import React, { Component } from 'react'
import SpecialNav from '../SpecialScrComp/SpecialNav'
import SpecialMain from '../SpecialScrComp/SpecialMain'

export default class SpecialScr extends Component {
  render() {
    return (<>
        <SpecialNav/>
        <SpecialMain/>
    </>
    )
  }
}

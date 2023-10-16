import React, { Component } from 'react'
import ShopHomePage from '../ShopScrComp/ShopHomePage'
import Think from '../ShopScrComp/Think'
import Esl from '../ShopScrComp/Esl'
import Logitech from '../ShopScrComp/Logitech'
import SpecialDeal from '../HomeScrComp/SpecialDeal'
import Fifa from '../ShopScrComp/Fifa'
import LearnMore from '../ShopScrComp/LearnMore'

export default class ShopScr extends Component {
  render() {
    return (
      <>
            <ShopHomePage/>
            <Think/>
            <Logitech/>
            <Esl/>
            <SpecialDeal/>
            <Fifa/>
            <LearnMore/>
      </>
    )
  }
}

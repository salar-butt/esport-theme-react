import React, { Component } from 'react'
import HomePage from '../HomeScrComp/HomePage'
import TopGame from '../HomeScrComp/TopGame'
import SpecialDeal from '../HomeScrComp/SpecialDeal'
import League from '../HomeScrComp/League'
import CS from '../HomeScrComp/CS'
import Valorant from '../HomeScrComp/Valorant'
import Dota from '../HomeScrComp/Dota'
import CallOfDuty from '../HomeScrComp/CallOfDuty'
import Gaming from '../HomeScrComp/Gaming'
import Entertainment from '../HomeScrComp/Entertainment'
import AllNews from '../HomeScrComp/AllNews'
import FAQ from '../HomeScrComp/FAQ'
import HomeNav from '../HomeScrComp/HomeNav'
export default class Home extends Component {
    render() {
        return (<>
        <HomeNav/>
        <HomePage/>
        <TopGame/>
        <SpecialDeal/>
        <League/>
        <CS/>
        <Valorant/>
        <Dota/>
        <CallOfDuty/>
        <Gaming/>
        <Entertainment/>
        <AllNews/>
        <FAQ/>
        </>
        )
    }
}


import React, { Component } from 'react'

export default class HomeNav extends Component {
  render() {
    return (
      <>
        <div className="nav">
        <ul>
            <li>Special Deals</li>
            <li>League of Legends</li>
            <li>CS:GO</li>
            <li>DOTA2</li>
            <li>Call OF Duty</li>
            <li>Pokemon</li>
            <li>VALORANT</li>
            <li>Gaming &nbsp; &nbsp; &nbsp;<i class="fa-solid fa-angle-right"></i></li>
        </ul>
      </div>
      </>
    )
  }
}

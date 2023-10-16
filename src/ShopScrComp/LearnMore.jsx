import React, { Component } from 'react'

export default class LearnMore extends Component {
  render() {
    return (
      <>
      <hr  style={{width:"85%",position:"relative",left:"7.5%"}}/>
        <div className="learn">
        <div className="shopImg more">
          <img src="/img/logo.png" alt="" />
        <div className="every">
            <h1>esports.com Shop - Everything you need for esports and <br /> Gaming</h1>
            <button>Shop Homepage</button>
            <p>Are you burning for esports and gaming? Are you looking for merchandise, fan articles and clothing for the games you play? Then you should take a peek into our esports.com store. Here you can find everything your heart desires. Regardless if it is merchandise for your favorite games or the best hardware.
            With our shop you can find the latest gaming products with the best prices at certified online retailers.
            Controllers, keyboards, gaming mice and other peripherals from top brands like Razer, Logitech, Roccat, SteelSeries and more are represented here.
            You can also find monitors from LG and Samsung as well as laptops and desktops with graphics cards and processors from Intel, AMD and Nvidia in our store.
            Whether you play Fifa, Call of Duty, League of Legends, Fortnite, CS:GO or Valorant, you are sure to find something for you in the esports.com shop.</p>
            <a href="#">learn more</a> 
        </div>
        <div>
          <h3>esports.com Shop </h3> 
          <p>Everything you need for esports and br gaming</p>
          </div>
        </div>
        <pre>Contains sponsored content</pre>
        </div>
      </>
    )
  }
}

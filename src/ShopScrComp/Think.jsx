import React, { Component } from 'react'

export default class Think extends Component {
  render() {
    return (
      <>
      <div className="think">
        <h1>Thinking of streaming?</h1>
        <div className="say">
            <div>
                <h1>Say yes & get 50% off your cool looks for that at OWN3D!</h1>
                <p>OWN3D is the #1 online shop for streamers and has the biggest selection of Stream Overlay Packages, alerts, emotes and more! All designs work right out of the box with your streaming software of choice. OBS Studio, Streamlabs or StreamElements. Be ready on any streaming platform like Twitch, YouTube, Trovo or Facebook. Get 50% off using the code “streaming”. Your viewers will love it.</p>
                <button>Shop now <i class="fa-solid fa-angle-right"></i></button>
            </div>
            <div>
              <img src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/04/2022-04_OWN3Dtv_esports-banner_EN_710x400.png" alt="" />
            </div>
        </div>
            <hr />
      </div>
        </>
    )
  }
}

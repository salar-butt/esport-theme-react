import React, { Component } from 'react'

export default class Entertainment extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/GMHikaru-banned-after-watching-dr-disrespect-720x405.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/GMHikaru-banned-after-watching-dr-disrespect-720x405.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Asmongold-criticizes-Dr-Disrespect-on-NFT-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/08/Dr-Disrespect-to-launch-own-gaming-studio-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2021/12/drdis-350x197.jpg",
            }
        ]
    }

    render(){
        return <>
            {/* <hr style={{width:"85%",position:"relative",left:"8.5%"}} /> */}
         <div className="valorantHome">
                      <h1>Entertainment</h1>
                      <div className="val" id="valorant1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                       <div className="flex"> <h1>GMHikaru receives Twitch ban after watching Dr Disrespect play chess</h1>
                        <p>Popular chess streamer Hikaru Nakamura has seemingly made an error in judgment, as he’s banned after watching Dr Disrespect.</p></div>
                      </div> 
                      <div className="valorant" id="valorant2">
                         <img src={this.state.data[1].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="valorant" id="valorant3">

                         <img src={this.state.data[2].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="valorant" id="valorant4">
                         <img src={this.state.data[3].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="valorant" id="valorant5">
                         <img src={this.state.data[4].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          {/* <div className="valorant" id="valorant6">
                             <span>Valorant</span>
                         <img src={this.state.data[5].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div> */}
                     </div>
            <hr style={{width:"85%",position:"relative",left:"8.5%"}} />
        </>
    }
}
    


                    
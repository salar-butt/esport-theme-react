import React, { Component } from 'react'

export default class Dota extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Arlington-Major-announced-720x405.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Sea-DPC-banned-accounts-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Hellraisers-suspend-operations-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Gamers-Galaxy-Dota-2-Virtus-Pro-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/FMryM1aWYAMRt7S-350x197.jpg",
            }
        ]
    }

    render(){
        return <>
            {/* <hr style={{width:"85%",position:"relative",left:"8.5%"}} /> */}
         <div className="valorantHome">
                      <h1>DOTA 2</h1>
                      <div className="val" id="valorant1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                       <div className="flex"> <h1>Arlington Major Announced PGL announces $500.000 Dota 2 Texas Major</h1>
                        <p>A new Dota 2 Major is coming to the United States, says PGL, featuring a $500.000 prize pool.</p></div>
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
    


                    
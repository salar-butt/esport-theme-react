import React, { Component } from 'react'

export default class CallOfDuty extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Secret-Vault-Warzone-Rebirth-Island-720x405.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Warzone-season-2-reloaded-merges-gamemodes-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/mp5-loadout-rebirth-island-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Snoop-dogg-joins-call-of-duty-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/warzone-pacific-season-2-reloaded-350x197.jpg",
            }
        ]
    }

    render(){
        return <>
            {/* <hr style={{width:"85%",position:"relative",left:"8.5%"}} /> */}
         <div className="valorantHome">
                      <h1>Call Of Duty</h1>
                      <div className="val" id="valorant1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                       <div className="flex"> <h1>Warzone Player finds loadout and cash in secret vault on Rebirth Island</h1>
                        <p>Like usual the newest Warzone update has some surprises in store and players have found a secret vault this time around.</p></div>
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
    


                    
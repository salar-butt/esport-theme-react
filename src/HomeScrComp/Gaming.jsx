import React, { Component } from 'react'

export default class Gaming extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Best-Gaming-Keyboards-967x544.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Best-Gaming-Mice-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/03/Activision-Blizzard-lay-off-50-people-restructure-live-events-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/GenShin-Impact-Guide-to-Freedom-How-To-Get-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/New-Witcher-game-in-development-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/07/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg",
            }

        ]
    }

    render(){
        return <>
            {/* <hr style={{width:"85%",position:"relative",left:"8.5%"}} /> */}
         <div className="mainHome mainCS">
                      <h1>Gaming</h1>
                      <div className="homeBoxes CS" id="homeBoxes1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                        {/* <span>Gaming</span> */}
                        <h1>Gaming Gear – The 5 best Gaming Keyboards</h1>
                        <p>Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!</p>
                      </div> 
                      <div className="homeBoxes" id="homeBoxes2">
                             {/* <span>League of Legends</span> */}
                         <img src={this.state.data[1].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes3">
                             {/* <span>Gaming</span> */}
                         <img src={this.state.data[2].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes4">
                            {/* <div className="span"> <span>CS:GO</span> <span>DOTA 2</span> <span>Gaming</span></div> */}
                         <img src={this.state.data[3].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes5">
                             {/* <span>Valorant</span> */}
                         <img src={this.state.data[4].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes6">
                         <img src={this.state.data[5].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                     </div>
            <hr style={{width:"85%",position:"relative",left:"8.5%"}} />
        </>
    }
}
    


                    
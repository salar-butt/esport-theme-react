import React, { Component } from 'react'

export default class League extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/06/Olaf-League-of-Legends-Splash-Art-922x544.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/05/Doublelift-on-NA-servers-and-ping-issues-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Best-season-12-mid-laners-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/01/TSMFTXmain-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Tryndamere-Barbarian-King-Skin-334x197.jpg",
            }

        ]
    }

    render(){
        return <>
            <hr style={{width:"85%",position:"relative",left:"8.5%"}} />
         <div className="mainHome">
                      <h1>League of Legends</h1>
                      <div className="homeBoxes" id="homeBoxes1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                        {/* <span>Gaming</span> */}
                        <h1>Riot plans mid-scope updates for both Taliyah and Olaf</h1>
                        <p>Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations</p>
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
                     </div>
            <hr style={{width:"85%",position:"relative",left:"8.5%"}} />
        </>
    }
}
    


                    
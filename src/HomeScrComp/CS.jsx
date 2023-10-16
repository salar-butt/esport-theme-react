import React, { Component } from 'react'

export default class CS extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Virtus-Pro-playing-under-outsiders-967x544.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Hellraisers-suspend-operations-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/ESL-Pro-League-ban-Russian-teams-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/blast-navi-ukraine-update-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/simple-charity-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/FMojeY_WUAYC4_o-1-350x197.jpg",
            }

        ]
    }

    render(){
        return <>
            <hr style={{width:"85%",position:"relative",left:"8.5%"}} />
         <div className="mainHome mainCS">
                      <h1>CS:GO</h1>
                      <div className="homeBoxes CS" id="homeBoxes1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                        {/* <span>Gaming</span> */}
                        <h1>Virtus Pro CS:GO players will compete under name ‘Outsiders’ in ESL Pro League</h1>
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
                          <div className="homeBoxes" id="homeBoxes6">
                         <img src={this.state.data[5].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                     </div>
            <hr style={{width:"85%",position:"relative",left:"8.5%"}} />
        </>
    }
}
    


                    
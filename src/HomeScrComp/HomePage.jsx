import React, { Component } from 'react'

export default class HomePage extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/04/wireless-gaming-headsets-affiliates-953x544.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/LEC-Grand-Final-to-feature-live-audience-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Beste-Gaming-Headsets-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/NAVI-CEO-about-war-in-Ukraine-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/New-VALORANT-Agent-abilities-leaked-350x197.jpg",
            }

        ]
    }

    render(){
        return <>
         <div className="mainHome">
                      <h1>Latest News</h1>
                      <div className="homeBoxes" id="homeBoxes1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                        <span>Gaming</span>
                        <h1>Gaming Gear – The 5 best Wireless Headsets compared</h1>
                        <p>Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations</p>
                      </div> 
                      <div className="homeBoxes" id="homeBoxes2">
                             <span>League of Legends</span>
                         <img src={this.state.data[1].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes3">
                             <span>Gaming</span>
                         <img src={this.state.data[2].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes4">
                            <div className="span"> <span>CS:GO</span> <span>DOTA 2</span> <span>Gaming</span></div>
                         <img src={this.state.data[3].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                          <div className="homeBoxes" id="homeBoxes5">
                             <span>Valorant</span>
                         <img src={this.state.data[4].imgUrl} alt="" />
                          <h5>LEC Grand Final To Feature Live AudienceLEC to bring back live audience for Spring Split Finals The<small>LEC is bringing back the live audience for one series, as the competition</small></h5>
                          </div>
                     </div>
        </>
    }



    // render() {
    //     return (
    //       <>
    //       <div className="mainHome">
    //           {
    //               this.state.data.map((item, index) => (
    //               
    //             ))
    //         }
    //         </div>
    //       </>
    //     )
    //   }
    }
    


                    
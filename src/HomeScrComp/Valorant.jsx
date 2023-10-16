import React, { Component } from 'react'

export default class Valorant extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/New-VALORANT-AGent-teaser-720x405.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/FPX-not-competing-at-vct-masters-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/VCT-Masters-might-not-feature-russian-players-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Cypher-VALORANT-removed-temporarily-350x197.jpg",
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/Rawkus-350x197.jpg",
            }
        ]
    }

    render(){
        return <>
            {/* <hr style={{width:"85%",position:"relative",left:"8.5%"}} /> */}
         <div className="valorantHome">
                      <h1>VALORANT</h1>
                      <div className="val" id="valorant1">
                        <img src={this.state.data[0].imgUrl} alt="" />
                       <div className="flex"> <h1>VALORANT blog teases newest agent</h1>
                        <p>We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.</p></div>
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
    


                    
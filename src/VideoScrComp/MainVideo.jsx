import React, { Component } from 'react'

export default class MainVideo extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2021/11/spunJ-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2021/11/yekindar-350x194.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2021/11/semmler-small2-330x197.png",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/09/EU-versus-NA-in-VALORANT-Featured-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/07/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/08/The-competitive-history-of-mirage-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/08/How-VALORANT-is-taking-over-the-competitive-FPS-scene-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/07/How-100-Thieves-became-one-of-the-best-teams-in-the-LCS-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },

        ]
    }

  render() {
    return (<>
    <div className="mainAll">
        <h1>Latest videos</h1>
        <ul>
            <li>All</li>
            <li>Special Deals</li>
            <li>League And Legends</li>
            <li>CS:GO</li>
            <li>VALORANT</li>
            <li>DOTA 2</li>
            <li>Call Of Duty</li>
            <li>Pokemon</li>
            <li>Gaming</li>
            <li>Entertainment</li>
            <li>FIFA</li>
        </ul>
        <div className="news">
            {
            this.state.data.map((item,index)=>{
                return <div>
                    <img src={item.imgUrl} alt="" />
                    <h4>{item.heading}</h4>
                    <p>{item.para}</p>
                </div>
            })
        }
        </div>
        <button>Show more news <i class="fa-solid fa-angle-down"></i></button>
    </div>
    </>
    )
  }
}

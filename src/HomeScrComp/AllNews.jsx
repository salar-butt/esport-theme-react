import React, { Component } from 'react'

export default class AllNews extends Component {

    state={
        data:[
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/04/wireless-gaming-headsets-affiliates-345x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/LEC-Grand-Final-to-feature-live-audience-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },
            {
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Beste-Gaming-Headsets-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/NAVI-CEO-about-war-in-Ukraine-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/New-VALORANT-Agent-abilities-leaked-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/06/Olaf-League-of-Legends-Splash-Art-334x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/Best-Gaming-Keyboards-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },{
                imgUrl : "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/03/New-VALORANT-AGent-teaser-350x197.jpg",
                heading : "Gaming Gear – The 5 best Wireless Headsets compared",
                para : "Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here ar"
            },

        ]
    }



  render() {
    return (<>
    <div className="mainAll">
        <h1>All News</h1>
        <ul>
            <li>All</li>
            <li>League And Legends</li>
            <li>CS:GO</li>
            <li>VALORANT</li>
            <li>DOTA 2</li>
            <li>Call Of Duty</li>
            <li>Pokemon</li>
            <li>Gaming</li>
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

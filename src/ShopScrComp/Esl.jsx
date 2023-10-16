import React, { Component } from 'react'

export default class Esl extends Component {
  render() {
    return (
      <>
      <div className="think">
        <h1>Official ESL Shop</h1>
        <div className="say">
            <div>
                {/* <h1>Gaming Mice</h1> */}
                <p>The ESL Shop offers a wide range of merchandise from CS:GO and Dota2 merch to official clan wear of teams like Virtus Pro, FaZe, ENCE, BIG, fnatic, G2 Esports and more.</p>
                <button>Shop now <i class="fa-solid fa-angle-right"></i></button>
            </div>
            <div>
              <img src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/01/ESL-FACEIT-merge-under-Saudi-Savvy-Group.jpg" alt="" />
            </div>
        </div>
            <hr />
      </div>
        </>
    )
  }
}

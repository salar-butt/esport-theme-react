import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {

  render() {
    return (<>
      <header>
        <nav>
          <div>
          <img src="/img/logo.png" alt="" />
          <h3>esports<span>.com</span> </h3>
          </div>
          <div>
            <ul>
              <li>
              <Link to="/" className="linkTag">Home</Link>

                </li>

              <li>
                <Link to="/news" className="linkTag">News</Link>
              </li>

              <li>
                <Link to="/videos"  className="linkTag">Videos</Link>
              </li>

              <li>
                <Link to="/special_deals"  className="linkTag">Special Deals</Link>
              </li>

              <li>
                <Link to="/shop"  className="linkTag">Shop</Link>
              </li>
      

              <li><i class="fa-solid fa-toggle-on"></i></li>
              <li>EN <i class="fa-solid fa-angle-down"></i></li>
            </ul>
          </div>
        </nav>
      </header>
      </>
    )
  }
}


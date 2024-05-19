import React from 'react'

//assets
import Creator from '../../../../assets/Creator.svg'
import Image1 from '../../../../assets/Image1.jpg'
import Image2 from '../../../../assets/Image2.jpg'
import Image3 from '../../../../assets/Image3.jpg'
import GoldenCup from '../../../../assets/Cup1.svg'
import SilverCup from '../../../../assets/Cup2.svg'
import BronzeCup from '../../../../assets/Cup3.svg'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-heading">My Dashboard</div>
      <div className="dashboard-components">
        <div className="component1">
          <div className="component1-heading">Your Most Popular Networks</div>
          <div className="component1-container">
            <div className="network1">
              <div className="network-profile">
                <span className='add-network'>+</span>
                <span>User 1</span>
              </div>
              <div className="followers">
                <p>Followers</p>
                <span>2</span>
              </div>
            </div>
            <div className="network2">
              <div className="network-profile">
                <span className='add-network'>+</span>
                <span>User 2</span>
              </div>
              <div className="followers">
                <p>Followers</p>
                <span>3</span>
              </div>
            </div>
            <div className="network3">
              <div className="network-profile">
                <span className='add-network'>+</span>
                <span>User 3</span>
              </div>
              <div className="followers">
                <p>Followers</p>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="component2">
          <div className="component2-heading">
            <h1>Most Engaged User</h1>
          </div>
          <div className="component2-container">
            <div className="user1">
              <div className="user-img">
                <img src={Image1} alt="+" />
              </div>
              <div className="user-name">
                <p>Alexander</p>
              </div>
                <div className="trophy">
                  <img src={GoldenCup} alt="Gold" />
                </div>
            </div>
            <div className="user2">
              <div className="user-img">
                <img src={Image2} alt="+" />
              </div>
              <div className="user-name">
                <p>Sophia</p>
              </div>
                <div className="trophy">
                  <img src={SilverCup} alt="Silver" />
                </div>
            </div>
            <div className="user3">
              <div className="user-img">
                <img src={Image3} alt="+" />
              </div>
              <div className="user-name">
                <p>Jeffery</p>
              </div>
                <div className="trophy">
                  <img src={BronzeCup} alt="Bronze" />
                </div>
            </div>
          </div>
        </div>
        <div className="component3">
            <div className="component3-heading">
              <h1>Paid Network Earnings</h1>
            </div>
          <div className="component3-container">
            <div className="component3-logo">
              <img src={Creator} alt="" />
            </div>
            <div className="paragraph">
              <p>You're Popular!<br />You've got 100 followers,<br />become a paid creator and earn from networks</p>
            </div>
            <div className="creator-btn">
              <button>Become a Creator</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
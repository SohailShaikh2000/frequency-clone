import React from 'react'
import '../../../App.scss'

//assets
import Friends from '../../../assets/friends.png'
import Money from '../../../assets/money.png'
import Chat from '../../../assets/chat.png'

const ThirdComponent = () => {
  return (
    <div className='third-component-container'>
      <div className="make-friends">
        <div className="logo">

          <img src={Friends} alt="friends logo" />
        </div>
        <div className="title">
          <h2>Make new friends and keep the old</h2>
        </div>
        <div className="paragraph">
          <p>Search for an existing hub to join the conversation or create your own hub where a group of like minded individuals connect. Customize your hub with options like public or private visibility.</p>
        </div>
      </div>
      <div className="make-money">
        <div className="logo">
          <img src={Money} alt="money logo" />
        </div>
        <div className="title">
          <h2>Make money 24/7</h2>
        </div>
        <div className="paragraph">
          <p>Hub owners like brands and influencers monetize their community all the time. through the release of creative non-exclusive and exclusive content.</p>
        </div>
      </div>
      <div className="chat-and-ar">
        <div className="logo">
          <img src={Chat} alt="chat logo" />
        </div>
        <div className="title">
          <h2>Chat, Live, AR features and more</h2>
        </div>
        <div className="paragraph">
          <p>Using Frequency gives you an opportunity to explore the latest social features for a more intense and engaging experience.</p>
        </div>
      </div>
    </div>
  )
}

export default ThirdComponent
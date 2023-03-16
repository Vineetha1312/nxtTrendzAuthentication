import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-details">
        <div className="home-text-container">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <p className="description">Fashion is part of the daily air</p>
          <button className="shopnow-btn" type="button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-poster"
        />
        <p className="description-mobile-device">
          Fashion is part of the daily air
        </p>
        <button className="shopnow-btn-mobile-device" type="button">
          Shop Now
        </button>
      </div>
    </div>
  </div>
)

export default Home

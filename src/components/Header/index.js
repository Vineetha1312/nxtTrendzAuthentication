import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <div className="website-logo-details-mobile">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-mobile"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout"
      />
    </div>
    <nav className="header-mobile-devices">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-logos"
        />
      </Link>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-logos"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-logos"
      />
    </nav>
    <nav className="header-medium-device">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-desktop"
      />
      <div className="nav-items">
        <Link to="/">
          <li className="list-item">
            <p className="nav-headings">Home</p>
          </li>
        </Link>
        <li className="list-item">
          <p className="nav-headings">Products</p>
        </li>
        <li className="list-item">
          <p className="nav-headings">Cart</p>
        </li>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </nav>
  </div>
)

export default Header

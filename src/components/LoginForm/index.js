import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    failureMsg: false,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
    this.setState({
      failureMsg: true,
    })
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, failureMsg} = this.state
    return (
      <div className="loginform-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-loginform"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="website-login-image-mobile-device"
            />
            <div>
              <label className="username-label" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                className="input-element"
                id="username"
                placeholder="Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="password-container">
              <label className="username-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                className="input-element"
                id="Password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
            {failureMsg ? <p className="error-msg">*Username not Found</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm

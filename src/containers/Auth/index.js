import React, {Component} from 'react'
import {ActivityIndicator} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LoginForm from '@components/LoginForm'
import ThirdPartyLogin from '@components/ThirdPartyLogin'
import './style.less'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'

@withNavBarBasicLayout('')
class Auth extends Component {
  state = {
    animating: true
  }

  submit = form => {
    let {loginByPhoneNumber, loginByEmail} = this.props
    let {verifyText, password} = form;
    if(/^1[34578]\d{9}$/.test(verifyText)) {
      loginByPhoneNumber({phoneNumber: verifyText, password})
    } else {
      loginByEmail({email: verifyText, password})
    }
  }

  handleRegister = () => {
    this.props.history.push({
      pathname: '/register'
    })
  }

  render() {
    let {currentState} = this.props
    return (
      <>
        {(() => {
          switch (currentState) {
            case 'loading':
              return (
                <div className="authContainer">
                  <ActivityIndicator
                    toast
                    text="登录中..."
                    animating={this.state.animating}
                  />
                </div>
              )
            case 'profile':
              return <Redirect to={'/'} />
            default:
              return (
                <div className="authContainer">
                  <LoginForm
                    className="loginForm"
                    handleLogin={this.submit}
                    handleRegister={this.handleRegister}
                  />
                  <ThirdPartyLogin className="thirdPartyLogin" />
                  <footer> 掘金·juejin.im </footer>
                </div>
              )
          }
        })()}
      </>
    )
  }
}

const mapState = state => ({
  currentState: state.auth.currentState
})

const mapDispatch = ({auth: {loginByPhoneNumber, loginByEmail}}) => ({
  loginByPhoneNumber: playload => loginByPhoneNumber(playload),
  loginByEmail: playload => loginByEmail(playload)
})
export default connect(
  mapState,
  mapDispatch
)(Auth)

Auth.propTypes = {
  currentState: PropTypes.string.isRequired
}

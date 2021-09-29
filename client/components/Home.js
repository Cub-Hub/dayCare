import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'


const Home = () => (
  <div id="home">

    <div>
      {/* <img src="/imgs/hero.jpg" alt="" className="heroImg" /> */}
      <h1>Experience childcare as it should be</h1>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Home)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'


const Navbar = ({ handleClick, isLoggedIn }) => (
  <div id="navbar">
    {isLoggedIn ? (
      <div>
        <Link to="/home"><h1><img id="navbar-logo" src="/cubhub.png" alt="cubhub logo" />Cub-Hub</h1></Link>
        <div>
          <nav>
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/calendar">Calendar</Link>
              <Link to='/billing'>Billing</Link>
              <a href="#" onClick={handleClick}>
                Logout
            </a>
            </div>
          </nav>
        </div>
      </div>
    ) : (
        <div>
          <Link to="/"><h1><img id="navbar-logo" src="/cubhub.png" alt="cubhub logo" />Cub-Hub</h1></Link>
          <div>
            <nav>
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/newsletter">Newsletter Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
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

export default connect(mapState, mapDispatch)(Navbar)

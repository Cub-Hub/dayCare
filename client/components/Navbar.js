import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'


const Navbar = ({ handleClick, isLoggedIn, typeId }) => (

  <div id="navbar">

    {isLoggedIn ? (
      <div>
        <Link to="/home"><h1><img id="navbar-logo" src="/cubhub.png" alt="cubhub logo" />Cub-Hub</h1></Link>
        <div>
          <nav>
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/chat">Chat</Link>
              <Link to="/calendar">Calendar</Link>
              {typeId === 2 ? <Link to='/billing'>Billing</Link> : null}
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
  console.log('NAV BAR state ', state)
  return {
    isLoggedIn: !!state.auth.id,
    typeId: state.auth.typeId,
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

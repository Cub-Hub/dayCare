import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../store'


/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props
  return (
    <div id="loginSignupPage">
      <div>
        {name === 'login' ?
          // Login form
          <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit" className="button">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
          :
          // Signup form
          <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" />
            </div>
            <div className="radioWrapper">
              <input name="typeId" type="radio" value="3" />
              <label htmlFor="typeId">
                <small>Parent</small>
              </label>
            </div>
            <div className="radioWrapper">
              <input name="typeId" type="radio" value="1" />
              <label htmlFor="typeId">
                <small>Employee</small>
              </label>
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <label htmlFor="confirmpassword">
                <small>Confirm Password</small>
              </label>
              <input name="confirmpassword" type="password" />
            </div>
            <div>
              <button type="submit" className="button">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        }


      </div>

    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      if (evt.target.name === 'login') {
        const formName = evt.target.name
        const username = evt.target.username.value
        const password = evt.target.password.value
        dispatch(authenticate(username, password, formName))
      } else if (evt.target.name === 'signup' && evt.target.password.value === evt.target.confirmpassword.value) {
        const formName = evt.target.name
        const username = evt.target.username.value
        const password = evt.target.password.value
        const typeId = evt.target.typeId ? evt.target.typeId.value * 1 : ''
        dispatch(authenticate(username, password, formName, typeId))
      }
      else {
        alert('passwords do not match - please correct and submit again')
        evt.target.password.value = '';
        evt.target.confirmpassword.value = '';
        evt.target.password.focus();
      }

    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

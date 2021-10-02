import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ForgotPassword extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();

  };

  // const { name, displayName, handleSubmit, error } = props
  render() {
    return (
      <div id="loginSignupPage">
        <div>
          <form onSubmit={this.handleSubmit} name={name}>
            <h2 className="block-title">Lost My Password</h2>
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" />
            </div>

            <div>
              <button type="submit" className="button">Submit</button>
            </div>

            {/* <div className="smallLink">
              <Link to="/login">Back to login</Link>
            </div> */}
          </form>
        </div >

      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ForgotPassword)

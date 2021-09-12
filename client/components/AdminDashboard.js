import React, { Component } from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export class AdminDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="admindashboard">
        <div id="header" className="block">
          header
        </div>
        <div className="col2">
          <div className="block sidepanel">
            <h2>School Name</h2>
            <form>
              <label>school location</label>
              <select>
                <option>location 1</option>
                <option>location 2</option>
                <option>location 3</option>
              </select>
            </form>
            <br /><br />
            <h2>Total</h2>
            <div className="col2">
              <p>26 Teachers</p>
              <a href="">Manage</a>
            </div>
            <div className="col2">
              <p>65 Students</p>
              <a href="">Manage</a>
            </div>
            <br /><br />
            <h2>Billings</h2>
            <div className="col2">
              <p>2 Delayed</p>
              <a href="">Manage</a>
            </div>
            <div className="col2">
              <p>4 Credited</p>
              <a href="">Manage</a>
            </div>
          </div>
          <div>
            <div className="col2">
              <div className="block sidepanel">
                <h2>Reports</h2>
                <div className="button"><p>Teachers</p></div>
                <div className="button"><p>Children</p></div>
                <div className="button"><p>Parents</p></div>
              </div>
              <div className="block">
                calendar
              </div>
            </div>
            <div className="block">
              activity
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
   * CONTAINER
   */
const mapState = state => {
  return {
    username: state.auth.username
  }
}


export default connect(mapState)(AdminDashboard)

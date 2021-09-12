import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStudents, getUsers } from '../store';

/**
 * COMPONENT
 */
class AdminDashboard extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR PROPS', props)
  }

  async componentDidMount() {
    console.log('COMPONENT DID MOUNT', this.props)
    await this.props.getStudents();
    await this.props.getUsers();

    // this.setState({ users: this.props.users });
    // this.setState({ students: this.props.students })
  }

  render() {
    console.log('RENDER PROPS', this.props)
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
              <p>{this.props.users.length} Teachers</p>
              <a href="">Manage</a>
            </div>
            <div className="col2">
              <p>{this.props.students.length} Students</p>
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

// const mapState = state => {
//   return {
//     username: state.username
//   }
// }
const mapStateToProps = state => {
  return {
    // username: state.auth.username
    users: state.users,
    students: state.students
    // state
  }
}


const mapDispatchToProps = {
  getStudents,
  getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)

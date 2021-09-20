import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentTable from './StudentTable';

import { getStudents, getUsers, fetchDailyCheckin } from '../../store';

/**
 * COMPONENT
 */
class AdminDashboard extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.getStudents();
    await this.props.getUsers();
    await this.props.fetchDailyCheckin();
  }

  render() {
    return (
      <div id="admindashboard">
        <div className="col2">
          <div className="block sidepanel">
            <h2 className="block-title">School Name</h2>
            <br /><br />
            <h2 className="block-title">Total</h2>
            <div className="col2">
              <p>{this.props.users.length} Teachers</p>
              <a href="">Manage</a>
            </div>
            <div className="col2">
              <p>{this.props.students.length} Students</p>
              <a href="">Manage</a>
            </div>
            <br /><br />
            <h2 className="block-title">Billings</h2>
            <div className="col2">
              <p>2 Delayed</p>
              <a href="">Manage</a>
            </div>
            <div className="col2">
              <p>4 Credited</p>
              <a href="">Manage</a>
            </div>
            <br /><br />
            <hr />
            <br /><br />
            <h2 className="block-title">Reports</h2>
            <div className="button"><p>Teachers</p></div>
            <div className="button"><p>Children</p></div>
            <div className="button"><p>Parents</p></div>
          </div>
          <div>
            <div className="block">
              calendar
            </div>
            <StudentTable />
          </div>
        </div>
      </div>
    )
  }
}

/**
   * CONTAINER
   */

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
  fetchDailyCheckin
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)

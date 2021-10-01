import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentTable from './StudentTable';

import Calendar from '../Calendar'


import { Link } from "react-router-dom";

import { getStudents, getUsers, fetchDailyCheckin, updateStudent } from '../../store';


/**
 * COMPONENT
 */
class AdminDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      pendingChildren: [],
    }
    this.approveChild = this.approveChild.bind(this)
  }

  async componentDidMount() {
    await this.props.getStudents();
    await this.props.getUsers();
    await this.props.fetchDailyCheckin();
    this.setState({
      pendingChildren: this.props.students.filter(student => student.isPending)
    })
  }

  approveChild(updatedStudent) {
    console.log(updatedStudent)
    alert(`${updatedStudent.firstName} register is approved`)
    this.props.updateStudent(updatedStudent);
    const updatePendingChild = this.state.pendingChildren.filter(student => student.id !== updatedStudent.id)
    this.setState({ pendingChildren: updatePendingChild })
  }

  render() {
    console.log('FIND PENDING CHILD ', this.state.pendingChildren)
    return (
      <div id="admindashboard">
        <div className="col2">
          <div className="block sidepanel">
            <h2 className="block-title">School Name</h2>
            <br /><br />
            <h2 className="block-title">Total</h2>
            <div className="col2">
              <p>{this.props.users.length} Teachers</p>
              <Link to='/employees'>Manage</Link>
            </div>
            <div className="col2">
              <p>{this.props.students.length} Students</p>
              <Link to='/students'>Manage</Link>
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
            <h2 className="block-title">Pending children</h2>
            {
              this.state.pendingChildren.map(student =>
                <div key={student.id} className="button" onClick={() => this.approveChild(student)}><p>{student.firstName} {student.lastName}</p></div>
              )
            }
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
              <Calendar />

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
  fetchDailyCheckin,
  updateStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)

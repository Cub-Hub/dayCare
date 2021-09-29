import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentTable from './StudentTable';
import { Link } from "react-router-dom";
import axios from 'axios';

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
  // runReport = async()=>{
  //   const { id } = (await axios.post('/api/v1/reporting/report_runs')).data
  //   const dataTwo = await axios.get(`/api/v1/reporting/report_runs/${id}`)
  //   const { data } = (await axios.get('/api/v1/reporting/report_runs')).data
  //   const report = data.find( report => report.status === 'succeeded')
  //   const balance = (await axios.post('/api/openreport', { stripeUrl: report.result.url })).data
  //   console.log('balance---->', balance)
  // }
  
  render() {
    console.log('props--->', this.props.history)
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
            <h2 className="block-title">Reports</h2>
            <div className="button"><p>Teachers</p></div>
            <div className="button"><p>Children</p></div>
            <div className="button"><p>Parents</p></div>
            <div className="button" onClick={ ()=> this.props.history.push('/financial-snapshot')}><p>Financial Summary</p></div>
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

const mapStateToProps = (state, otherProps) => {
  return {
    // username: state.auth.username
    users: state.users,
    students: state.students,
    otherProps
    // state
  }
}


const mapDispatchToProps = {
  getStudents,
  getUsers,
  fetchDailyCheckin,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)

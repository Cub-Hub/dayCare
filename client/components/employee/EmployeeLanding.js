// import React from 'react'
// import {connect} from 'react-redux'

// /**
//  * COMPONENT
//  */
// export const AdminLanding = props => {
//   const {username} = props

//   console.log(props)

//   return (
//     <div>
//       <h3>Welcome, {username}</h3>
//       <h3>You are an employee</h3>
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     username: state.auth.username
//   }
// }

// export default connect(mapState)(AdminLanding)




import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStudents } from '../../store';

/**
 * COMPONENT
 */
class EmployeeLanding extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR PROPS', props)
  }

  async componentDidMount() {
    console.log('COMPONENT DID MOUNT', this.props)
    await this.props.getStudents();

  }

  render() {
    console.log('RENDER PROPS', this.props)
    return (
      <div id="admindashboard">
        {/* <div id="header" className="block">
          header
        </div> */}
        <div className="col2">
          <div className="block sidepanel">
            <div>
              <h2>Hi, Teacher {this.props.username}</h2>
              <br /><br />
              <p>You are at</p>
              <h3>
                School Name<br />
                Location<br />
                _____ class
              </h3>
            </div>


            <br /><br />
            <div className="col2">
              <p>Total {this.props.students.length} Students</p>
              <a href="">Manage</a>
            </div>
          </div>
          <div>
            <div className="col2">
              <div className="block sidepanel">
                <h2>Log & Share</h2>
                <div className="button"><p>Take a Photo</p></div>
                <div className="button"><p>Take a Video</p></div>
                <div className="button"><p>Share Photo/Video</p></div>
              </div>
              <div className="block">
                <div className="carouselContent">
                  <div className="carouselContent-arrow-left">Arrow Left</div>
                  <div>
                    <h3>Today's Lesson Plan</h3>
                    <ol>
                      <li>12:00 – Color match</li>
                      <li>13:30 – Clay play</li>
                    </ol>
                  </div>
                  <div className="carouselContent-arrow-left">Arrow Right</div>
                </div>
              </div>
            </div>
            <div className="block scroll-content-wrapper">
              <h3>Student Daily Tracker</h3>
              <div className="scroll-content">
                {this.props.students.map(student => {
                  return (
                    <div>
                      <div>{student.firstName}</div>
                      <div>Ate<br />{Math.round(Math.random() * 10)} times</div>
                      <div>Nap<br />{Math.round(Math.random() * 10)} times</div>
                      <div>Poop<br />{Math.round(Math.random() * 10)} times</div>
                    </div>
                  )
                })}

              </div>
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
    username: state.auth.username,
    students: state.students
  }
}


const mapDispatchToProps = {
  getStudents,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLanding)
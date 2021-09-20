import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Clockin from './Clockin';
// import { Button, Modal } from 'react-bootstrap'

import { getStudents } from '../../store';

/**
 * COMPONENT
 */
class EmployeeLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showFeedingNote: false
    }

    this.openFeedingNote = this.openFeedingNote.bind(this);
    this.closeFeedingNote = this.closeFeedingNote.bind(this);
    // this.eachStudentFeedingNote = this.eachStudentFeedingNote.bind(this);
  }

  async componentDidMount() {
    await this.props.getStudents();
  }

  // eachStudentFeedingNote() {
  //   const form = document.getElementById('feeding-update-form');
  //   const studentsList = this.props.students
  //   for (let i = 0; i < studentsList.length; i++) {
  //     let currentStudentName = studentsList[i].firstName
  //     currentStudentName = function openFeedingNote() {
  //       this.setState({ showFeedingNote: true });
  //       form.innerHTML = (
  //         <div>
  //           <form>
  //             <div>
  //               <label>Label</label>
  //               <input value="asdf" />
  //             </div>
  //             <div>
  //               <label>Label</label>
  //               <input value="asdf" />
  //             </div>
  //           </form>
  //           <button id="submit" name="submit" value="submit"></button>
  //         </div>
  //       )
  //     }
  //   }
  // }

  openFeedingNote(student) {
    console.log(this)
    this.setState({ showFeedingNote: true, currentStudent: student });
  }

  closeFeedingNote() {
    this.setState({ showFeedingNote: false });
  }

  render() {
    const myGroup = this.props.groups.filter((group) => group.id === this.props.groupId)[0]
    return (
      <div id="admindashboard">
        {/* <div id="header" className="block">
          header
        </div> */}
        <div className="col2">
          <div className="block sidepanel">
            <div>
              <h2>Hi, {this.props.username}</h2>
              <Clockin />
              <br /><br />
              <p>Your school:</p>
              <h3>
                {myGroup? myGroup.school.name : ''}<br />
                _____ {myGroup ? myGroup.name : ''}
              </h3>
            </div>
            <br /><br />
            <div>
              <p>Total Students: {this.props.students.length}</p>
              <a href="">Manage</a>
            </div>
            <br />
            <div>
              <div>Group Status:</div>
              <div>{myGroup ? myGroup.status : ''}</div>
            </div>
            <br /><br />

            <div className="button"><Link to='/status'>Set Group Status</Link></div>
            <div className="button"><p>Incident Report</p></div>
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
                <div className="carousel-wrapper">
                  <div className="carousel-arrow-left">Arrow Left</div>
                  <div>
                    <h3>Today's Lesson Plan</h3>
                    <ol>
                      <li>12:00 – Color match</li>
                      <li>13:30 – Clay play</li>
                    </ol>
                  </div>
                  <div className="carousel-arrow-right">Arrow Right</div>
                </div>
              </div>
            </div>
            <div className="block scroll-content-wrapper">
              <h3>Student Daily Tracker</h3>
              <div className="scroll-content">
                {this.props.students.map(student => {
                  return (
                    <div key={student.id}>
                      <div>{student.firstName}</div>
                      <div onClick={() => this.openFeedingNote(student)}>Ate<br />{Math.round(Math.random() * 10)} times</div>

                      <div>Nap<br />{Math.round(Math.random() * 10)} times</div>
                      <div>Poop<br />{Math.round(Math.random() * 10)} times</div>
                    </div>
                  )
                })}
                <Modal
                  isOpen={this.state.showFeedingNote}
                  ariaHideApp={false}
                  contentLabel="Feeding Activity Update"
                  onRequestClose={this.closeFeedingNote}
                  className=""
                >
                  <h2>Feeding Activity Update</h2>
                  {/* <div id="feeding-update-form">{this.state.}</div> */}
                  <button onClick={this.closeFeedingNote}>Close Modal</button>
                </Modal>
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
const mapStateToProps = state => {
  return {
    username: state.auth.username,
    students: state.students,
    groupId: state.auth.groupId,
    groups: state.groups
  }
}


const mapDispatchToProps = {
  getStudents,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLanding)
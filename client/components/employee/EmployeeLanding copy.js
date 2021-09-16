import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
// import { Button, Modal } from 'react-bootstrap'

import { getStudents } from '../../store';

/**
 * COMPONENT
 */
class EmployeeLanding extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR PROPS', props)

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
  openFeedingNote() {
    console.log(this)
    this.setState({ showFeedingNote: true });
  }

  closeFeedingNote() {
    this.setState({ showFeedingNote: false });
  }

  render() {
    console.log('RENDER STATE', this.state)
    return (
      <div id="admindashboard">
        {/* <div id="header" className="block">
          header
        </div> */}
        <div className="col2">
          <div className="block sidepanel">
            <div>
              <h2>Hi, Teacher {this.props.username}</h2>
              <p>You are clocked in</p>
              <div className="button"><p>Clock In / Out</p></div>
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
            <br /><br />
            <div className="button"><p>Message Center</p></div>
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
                      <div onClick={this.openFeedingNote}>Ate<br />{Math.round(Math.random() * 10)} times</div>

                      <div>Nap<br />{Math.round(Math.random() * 10)} times</div>
                      <div>Poop<br />{Math.round(Math.random() * 10)} times</div>
                    </div>
                  )
                })}
                <Modal
                  isOpen={this.state.showFeedingNote}
                  contentLabel="Feeding Activity Update"
                  onRequestClose={this.closeFeedingNote}
                  className=""
                >
                  <h2>Feeding Activity Update</h2>
                  <div id="feeding-update-form"></div>
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
    students: state.students
  }
}


const mapDispatchToProps = {
  getStudents,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLanding)
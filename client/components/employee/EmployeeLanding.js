import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

import { getStudents } from '../../store';

/**
 * COMPONENT
 */
class EmployeeLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showFeedingNote: false,
      showNappingNote: false,
      showPoopingNote: false,
      currentStudent: {}
    }

    this.openFeedingNote = this.openFeedingNote.bind(this);
    this.closeFeedingNote = this.closeFeedingNote.bind(this);
    this.openNappingNote = this.openNappingNote.bind(this);
    this.closeNappingNote = this.closeNappingNote.bind(this);
    this.openPoopingNote = this.openPoopingNote.bind(this);
    this.closePoopingNote = this.closePoopingNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await this.props.getStudents();

  }
  openFeedingNote(student) {
    this.setState({ showFeedingNote: true, currentStudent: student });
  }
  closeFeedingNote() {
    this.setState({ showFeedingNote: false });
  }

  openNappingNote(student) {
    this.setState({ showNappingNote: true, currentStudent: student });
  }
  closeNappingNote() {
    this.setState({ showNappingNote: false });
  }

  openPoopingNote(student) {
    this.setState({ showPoopingNote: true, currentStudent: student });
  }
  closePoopingNote() {
    this.setState({ showPoopingNote: false });
  }


  handleChange() {
    console.log('changed')
  }

  render() {
    console.log('RENDER STATE!!', this.state)
    return (
      <div id="admindashboard">
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
              <Link to="/students-activity-monitor">View Details</Link>

              <div className="scroll-content">
                {this.props.students.map(student => {
                  return (
                    <div key={student.id}>
                      <div>{student.firstName}</div>
                      <div onClick={() => this.openFeedingNote(student)}>Ate<br />{Math.round(Math.random() * 10)} times</div>
                      <div onClick={() => this.openNappingNote(student)}>Nap<br />{Math.round(Math.random() * 10)} times</div>
                      <div onClick={() => this.openPoopingNote(student)}>Poop<br />{Math.round(Math.random() * 10)} times</div>
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
                  <p>Feeding Activity Update</p>
                  <h2>{this.state.currentStudent.firstName} {this.state.currentStudent.lastName}</h2>

                  <form id="feeding-update-form">
                    <div>
                      <label>Ate</label>
                      <input name="ate" value="2" onChange={this.handleChange} />
                    </div>
                    <div>
                      <label>Details</label>
                      <input type="text" name="ate" onChange={this.handleChange} />
                    </div>
                    <button id="submit">Update Activity</button>
                  </form>
                  <button onClick={this.closeFeedingNote}>Close Modal</button>
                </Modal>

                <Modal
                  isOpen={this.state.showNappingNote}
                  ariaHideApp={false}
                  contentLabel="Feeding Activity Update"
                  onRequestClose={this.closeNappingNote}
                  className=""
                >
                  <p>Napping Activity Update</p>
                  <h2>{this.state.currentStudent.firstName} {this.state.currentStudent.lastName}</h2>

                  <form id="feeding-update-form">
                    <div>
                      <label>Nap</label>
                      <input name="ate" value="2" onChange={this.handleChange} />
                    </div>
                    <div>
                      <label>Details</label>
                      <input type="text" name="ate" onChange={this.handleChange} />
                    </div>
                    <button id="submit">Update Activity</button>
                  </form>
                  <button onClick={this.closeNappingNote}>Close Modal</button>
                </Modal>

                <Modal
                  isOpen={this.state.showPoopingNote}
                  ariaHideApp={false}
                  contentLabel="Feeding Activity Update"
                  onRequestClose={this.closePoopingNote}
                  className=""
                >
                  <p>Pooping Activity Update</p>
                  <h2>{this.state.currentStudent.firstName} {this.state.currentStudent.lastName}</h2>

                  <form id="feeding-update-form">
                    <div>
                      <label>Pooped</label>
                      <input name="ate" value="2" onChange={this.handleChange} />
                    </div>
                    <div>
                      <label>Details</label>
                      <input type="text" name="ate" onChange={this.handleChange} />
                    </div>
                    <button id="submit">Update Activity</button>
                  </form>
                  <button onClick={this.closePoopingNote}>Close Modal</button>
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
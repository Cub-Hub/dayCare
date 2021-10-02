import React, { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Clockin from './Clockin';
import Carousel from '../Carousel'

import { getStudents, postActivities, fetchActivities } from '../../store';

/**
 * COMPONENT
 */
const EmployeeLanding = (props) => {
  const [open, setOpen] = useState(false);
  const [curActivity, setCurActivity] = useState(null)
  const [curStudent, setCurStudent] = useState(null)
  const [curGroup, setCurGroup] = useState(null)
  const [log, setLog] = useState([])
  const [showNote, setShowNote] = useState(false)
  const modalRef = useRef(null)  

  useEffect(() => {
    props.getStudents()
  }, []);

  useEffect(() => {
    window.addEventListener("click", (evt) => {
      if(open && evt.target.className === 'open-modal'){
        setOpen(false)
      }
    })
  }, [open]);

  useEffect(() => {
    function fetchFunc() {
    fetchActivities()
  }
    fetchFunc()
  }, [props.myActivities]);

  

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const note = evt.target.note.value
    props.postActivities(curActivity, curStudent.id, curGroup, note)
    document.getElementById('myInput').value = ''
    modalRef.current.classList.add("modal-close")
      setTimeout(()=>{
        setShowNote(false)
        setOpen(false);
        document.getElementById('myInput').value = ''
        modalRef.current.classList.remove("modal-close")
      }, 400)
  }

  const handleOpen = (activity, student, groupId) => {
    const curLog = props.myActivities.filter(el => {
      return el.name === activity  && el.studentId === student.id
    })
    console.log('figuring out curLog => ', curLog)
    setLog(curLog)
    setCurActivity(activity)
    setCurStudent(student)
    setCurGroup(groupId)
    setOpen(true)
  }

  const simpleClose = () => {
    modalRef.current.classList.add("modal-close")
      setTimeout(()=>{
        setShowNote(false)
        setOpen(false);
        document.getElementById('myInput').value = ''
        modalRef.current.classList.remove("modal-close")
      }, 400)
  }

  const handleNote = (log) => {
    if(showNote) setShowNote(false)
    setShowNote(log)
  }

    console.log('employee landing props =>  ', props)


    const myGroup = props.groups.filter((group) => group.id === props.groupId)[0]
    const myStudentList = props.students.filter(stu => stu.groupId === props.groupId)

    return (
      <div id="admindashboard">
        <div className={open ? 'open-modal' : 'hidden'}>
        <div className='cancelTop'>
              <button className='cancelBtn' onClick={simpleClose}>Cancel</button>
              </div>
            <form onSubmit={handleSubmit} ref={modalRef} className='open-modal-content'>
            <div className='modalContentContainer'>
              <h3>{curStudent ? `${curStudent.firstName} ${curStudent.lastName}`: ''}</h3>
              <h3>{showNote?`${curActivity} note from today at ${showNote.time}: `:''}</h3>
              {showNote ? <div>"{showNote.note}"</div> : <input id='myInput' placeholder='input note here...' name="note" type="text"></input>}
              {showNote? <button style={{backgroundColor:'lightblue'}} onClick={()=> handleNote()}>Close Note</button> : null}
              <div>
                {log.map((log) => {
                  return(
                  <div key={log.id} onClick={()=> handleNote(log)}>Last {curActivity} event for {curStudent.firstName}: {log.time}</div>
                  )
                })}
              </div>
            </div>
            <div className='modal-bottom'>
            <button type="submit">Submit</button>
          </div>
            </form>
            
        </div>
        <div className="col2">
          <div className="block sidepanel">
            <div>
              <h2 className="block-title">Hi, {props.username}</h2>
              <Clockin />
              <br /><br />
              <p className="block-title">Your school:</p>
              <p>
                {myGroup ? myGroup.school.name : ''}<br />
                {myGroup ? myGroup.name : 'No assigned classroom'}
              </p>
            </div>
            <br />
            <div>
              <p>Total Students: {myStudentList.length}</p>
              <Link to='/my/students'>Manage</Link>
            </div>
            <br />
            <div>
              <div className="block-title">Group Status:</div>
              <div>{myGroup ? myGroup.status : ''}</div>
            </div>
            <br /><br />

            <div className="button"><Link to='/status'>Set Group Status</Link></div>
            <div className="button"><p>Incident Report</p></div>
          </div>
          <div>
            <div className="col2">
              <div className="block sidepanel">
                <h2 className="block-title">Log & Share</h2>
                <div className="button"><p>Take a Photo</p></div>
                <div className="button"><p>Take a Video</p></div>
                <div className="button"><p>Share Photo/Video</p></div>
              </div>
              <div className="block">
                <div className="carousel-wrapper">
                  
                  <div>
                    <Carousel />
                    {/*<h3 className="block-title">Today's Lesson Plan</h3>
                    <ol>
                      <li>12:00 – Color match</li>
                      <li>13:30 – Clay play</li>
                    </ol>
                    */}
                  </div>
               
                </div>
              </div>
            </div>
            <div className="block scroll-content-wrapper position-relative">
              <h3 className="block-title">Student Daily Tracker</h3>
              <Link to="/students-activity-monitor" className="position-r-t">View Details</Link>
              <br />
              <div className="scroll-content">
                {myStudentList.map(student => {
                  return (
                    <div key={student.id}>
                      <div>{student.firstName}</div>
                      <div onClick={() => handleOpen('food', student, student.groupId)} >Food</div>
                      <div onClick={() => handleOpen('nap', student, student.groupId)} >Naps</div>
                      <div onClick={() => handleOpen('excretion', student, student.groupId)} >Excretions</div>
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

/**
   * CONTAINER
   */
const mapStateToProps = state => {
  return {
    username: state.auth.username,
    students: state.students,
    groupId: state.auth.groupId,
    groups: state.groups,
    myActivities: state.activities
  }
}


const mapDispatchToProps = {
  getStudents,
  postActivities,
  fetchActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLanding)
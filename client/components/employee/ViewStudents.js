import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, fetchDailyCheckin } from "../../store";

/**
 * COMPONENT
 */
const AllStudents = (props) => {
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const checkinList = props.checkins.map((checkin) => checkin.studentId)

  const myStudents = props.students.filter(stu => props.auth.groupId === stu.groupId)

  console.log(props)

  return (
    <div className='flexWrap'>
      {myStudents.map((student) => {
        return (
          <div className="studentCard" key={student.id}>
            <div className="allImgContainer">
            <Link to={`/student/${student.id}`}>
              <img  src={`${student.imgURL}`}/>
            </Link>
            </div>
            <div className="card-body">
              <div style={{marginBottom: '60px'}}> 
                <h6>Checkin Status</h6>
                {checkinList.includes(student.id) ?
                <div style={{backgroundColor:'green'}} className='statusDot'></div>
                :
                <div style={{backgroundColor:'red'}} className='statusDot'></div>
              }
              </div>
              <h5 className="card-title">{student.firstName} {student.lastName}</h5>
              <div>
              <Link to={`/student/${student.id}`}>
              <button href="#" className="btn btn-primary">
                Profile
              </button>
              </Link>
          </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

const mapState = (state) => {
  return state;
};

const mapDispatch = {
  fetchDailyCheckin,
  getUsers,
};
export default connect(mapState, mapDispatch)(AllStudents);
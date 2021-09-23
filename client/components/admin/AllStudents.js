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

  return (
      <div className='flexWrap'>
          {props.students.map((student) => {
          return(
            <Link to={`/student/${student.id}`}><div className="card" id="studentCard">
        <img className="card-img-top" src={`${student.imgURL}`} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          <p className="card-text">
              Parent: {student.user.username} {student.lastName}
          </p>
          <a href="#" className="btn btn-primary">
            Go to Profile
          </a>
        </div>
      </div></Link>
      )})}
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

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUsers, fetchDailyCheckin } from "../../store";

/**
 * COMPONENT
 */
const SingleStudent = (props) => {
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const {id} = useParams()

  const curStudent = props.students.find(student => student.id === id)

  const curCheckin = props.checkins.filter((checkin) => checkin.studentId === id)

  console.log('heres id: ', props)

  return (
    <section className="section about-section gray-bg" id="about">
    {curStudent ?
    <div className="singleStuContainer">
        <div className="row align-items-center flex-row-reverse">
            <Link to='/students'><button className='blankBtn'><i className="fa fa-arrow-circle-left fa-3x" aria-hidden="true"></i> Back</button></Link>
            <div className="col-lg-6">
                <div className="about-text go-to" style={{margin:'20px'}}>
                    <h3 className="dark-color">Student Details</h3>
                    <hr style={{width: '70%'}}/>
                    
                    <div className="row about-list">
                        <div className="col-md-6">
                            <div className="media">
                                <label>Birthday</label>
                                <p>4th april {2021 - curStudent.age}</p>
                            </div>
                            <div className="media">
                                <label>Age</label>
                                <p>{curStudent.age} Yr</p>
                            </div>
                            <div className="media">
                                <label>Parent</label>
                                <p>{curStudent.user.username} {curStudent.lastName}</p>
                            </div>
                            <div className="media">
                                <label>Address</label>
                                <p>California, USA</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="media">
                                <label>Parent<br/>E-mail</label>
                                <p>info@domain.com</p>
                            </div>
                            <div className="media">
                                <label>Parent<br/>Phone</label>
                                <p>820-885-3321</p>
                            </div>
                            <div className="media">
                                <label>Type</label>
                                <p>{curStudent.category.name}</p>
                            </div>
                            <div className="media">
                                <label>Daycare</label>
                                <p>{curStudent.school.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="avatarContainer">
                    <img src={`${curStudent.imgURL}`} title="" alt="" />
                </div>
            </div>
        </div>
        <div className="counter">
            <div className="row">
                <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                        <h6 className="count h2" data-to="150" data-speed="150">{curStudent.firstName}</h6>
                        <p className="m-0px font-w-600">First Name</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                        <h6 className="count h2" data-to="850" data-speed="850">{curStudent.lastName}</h6>
                        <p className="m-0px font-w-600">Last Name</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                        <h6 className="count h2" data-to="190" data-speed="190">{curStudent.group ? curStudent.group.name : 'Unassigned'}</h6>
                        <p className="m-0px font-w-600">Group Assigment</p>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                    {curCheckin[0] ?
                        <h4 style={{color:'green'}} className="count h2">Checked In</h4>
                        :
                        <h6 style={{color:'red'}} className="count h2" data-to="500" data-speed="500">Checked Out</h6>
                    }
                        <p className="m-0px font-w-600">Current Status</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    : ''}
</section>
  )
}

const mapState = (state) => {
  return state;
};

const mapDispatch = {
  fetchDailyCheckin,
  getUsers,
};

export default connect(mapState, mapDispatch)(SingleStudent);

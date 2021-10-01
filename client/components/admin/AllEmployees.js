import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, fetchDailyCheckin } from "../../store";

/**
 * COMPONENT
 */
const AllEmployees = (props) => {
    
    const employees = props.users.filter((user) => user.typeId===1)
    console.log('all employee props: ', employees)

  return (
    <div>
        {employees.map((employee) => {
            return(
                <div style={{margin:'10px'}}>
            <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block text-center">
                                    <div className="m-b-25"> <Link to={`/employee/${employee.id}`}><img src={`${employee.imgURL}`} className="img-radius" style={{height:'8rem'}}/> </Link> 
                                    </div>
                                    <h6 className="f-w-600">{`${employee.username}`} {`${employee.lastName}`}</h6>
                                    <p>Clockin Status:</p> {employee.isActive ?
                <div style={{backgroundColor:'green'}} className='statusDot'></div>
                :
                <div style={{backgroundColor:'red'}} className='statusDot'></div>
              }
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-block">
                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600 text-underline"></h6>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Email</p>
                                            <h6 className="text-muted f-w-400">{employee.email}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Phone</p>
                                            <h6 className="text-muted f-w-400">{employee.phone}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Daycare</p>
                                            <h6 className="text-muted f-w-400">{employee.school.name}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="m-b-10 f-w-600">Assigned Group</p>
                                            <h6 className="text-muted f-w-400">{employee.group.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapState, mapDispatch)(AllEmployees);

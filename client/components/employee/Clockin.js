
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { fetchClockinStatus, getUsers } from "../../store";

/**
 * COMPONENT
 */

const Clockin = (props) => {

  const paramsId = useParams().id

  useEffect(() => {
    
    const fetchId = paramsId || props.userId
    props.fetchClockinStatus(fetchId);
  }, []);

  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const handleClockin = async (id) => {
    const fetchId = paramsId || props.userId
    await axios.post("/api/employees/clockin", { id });
    await axios.put("/api/employees/activate", { id });
    props.fetchClockinStatus(fetchId);
    props.getUsers()
  };

  const handleClockout = async (id) => {
    const fetchId = paramsId || props.userId
    await axios.post("/api/employees/clockout", { id });
    await axios.put("/api/employees/deactivate", { id });
    props.fetchClockinStatus(fetchId);
    props.getUsers()
  };

  const curClockin = props.clockin[0]
    ? props.clockin.sort((a, b) => b.id - a.id)[0]
    : false;

  const handleId = paramsId || props.userId

  return (
    <div>
      <div>
        {/* begin::Body */}
        <div>
          {/* begin::Wrapper */}
          <button className={`button width100 ${curClockin.clockedin ? 'clockedInBtn' : 'clockedOutBtn'}`} onClick={() => curClockin.clockedin ? handleClockout(handleId) : handleClockin(handleId)}>
            {/* begin::Text */}
            {curClockin ? (
              curClockin.clockedin ? (
                <small>Clocked in at: {curClockin.time}</small>
              ) : (
                  <small>Currently Clocked Out</small>
                )
            ) : (
                <small>Currently Clocked Out</small>
              )}
            <div className="button-with-icon">
              <span className="text-center pt-7">
                {curClockin ? (
                  curClockin.clockedin ? (
                    <i
                      id='clockoutIcon'
                      className="fa fa-times-circle button-icon"
                      aria-hidden="true"
                    ></i>
                  ) : (
                      <i className="fa fa-clock-o button-icon" aria-hidden="true"></i>
                    )
                ) : (
                    <i id='clockinIcon' className="fa fa-clock-o button-icon" aria-hidden="true"></i>
                  )}
              </span>
              <p className="block-title">
                {curClockin
                  ? curClockin.clockedin
                    ? "Clock Out"
                    : "Clock In"
                  : "Clock in"}
              </p>
              {/* <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px"></div> */}

            </div>

            {/* end::Image */}
          </button>
          {/* end::Wrapper */}
        </div>
        {/* end::Body */}
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    userId: state.auth.id,
    clockin: state.clockin,
  };
};

const mapDispatch = {
  fetchClockinStatus,
  getUsers
};

export default connect(mapState, mapDispatch)(Clockin);

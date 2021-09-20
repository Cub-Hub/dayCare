
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchClockinStatus, getUsers } from "../../store";

/**
 * COMPONENT
 */

const Clockin = (props) => {
  useEffect(() => {
    props.fetchClockinStatus(props.userId);
  }, []);

  const { username } = props;
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const handleClockin = async (id) => {
    await axios.post("/api/employees/clockin", { id });
    await axios.put("/api/employees/activate", { id });
    props.fetchClockinStatus(props.userId);
    props.getUsers()
  };

  const handleClockout = async (id) => {
    await axios.post("/api/employees/clockout", { id });
    await axios.put("/api/employees/deactivate", { id });
    props.fetchClockinStatus(props.userId);
    props.getUsers()
  };

  console.log("clockin in the props~~~ ", props.clockin);
  console.log("props for clockin component~~~ ", props);

  const curClockin = props.clockin[0]
    ? props.clockin.sort((a, b) => b.id - a.id)[0]
    : false;

  return (
    <div>
      <div>
        {/* begin::Body */}
        <div className={`card-body pb-0 ${innerPadding}`}>
          {/* begin::Wrapper */}
          <div className="d-flex flex-column h-100">
            {/* begin::Text */}
            {curClockin ? (
              curClockin.clockedin ? (
                <small className="centerSmallSuccess">You are clocked in</small>
              ) : (
                  <small className="centerSmallDanger">You are clocked out</small>
                )
            ) : (
                <small className="centerSmallDanger">You are clocked out</small>
              )}
            <h3 className="text-dark text-center fs-1 fw-bolder pt-12 lh-lg">
              {curClockin
                ? curClockin.clockedin
                  ? "Clock Out"
                  : "Clock In"
                : "Clock in"}
            </h3>
            <div className="text-center pt-7">
              {curClockin ? (
                curClockin.clockedin ? (
                  <button
                    className="blankBtn"
                    onClick={() => handleClockout(props.userId)}
                  >
                    <i
                      className="fa fa-window-close fa-5x"
                      aria-hidden="true"
                    ></i>
                  </button>
                ) : (
                    <button
                      className="blankBtn"
                      onClick={() => handleClockin(props.userId)}
                    >
                      <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                    </button>
                  )
              ) : (
                  <button
                    className="blankBtn"
                    onClick={() => handleClockin(props.userId)}
                  >
                    <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                  </button>
                )}
            </div>
            <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px"></div>

            {/* end::Image */}
          </div>
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

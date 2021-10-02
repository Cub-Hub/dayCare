import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchClockinStatus, getUsers } from "../../store";

/**
 * COMPONENT
 */
const GroupStatus = (props) => {

  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const handleSubmit = async(evt) => {
    evt.preventDefault()
    const status = evt.target.status.value
    await axios.put(`api/employees/status/${props.groupId}`, {status})

  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Change your group Status</label>
            <input name="status" type="text"></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
      groupId: state.auth.groupId
    }
};

const mapDispatch = {
  fetchClockinStatus,
  getUsers
};

export default connect(mapState, mapDispatch)(GroupStatus);
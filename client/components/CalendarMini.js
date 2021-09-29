import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from "react-redux";

class Cal extends React.Component {
  
  render() {
    return <div>
    <Calendar
    calendarType = 'US'
    value={new Date(this.props.y,this.props.m,this.props.d)}
    /></div>;
  }
}


const mapState = (state) => {
  return {
  value: state.value
  };
};

export default connect(mapState)(Cal);
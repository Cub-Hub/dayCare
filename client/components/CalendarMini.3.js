import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from "react-redux";

const myApp = (props) => {
const [value, onChange] = useState(new Date());
  props.parentCallback(value) 

  return (
    <div>
      <Calendar
        calendarType = 'US'
    
        onChange={onChange}
        value={value}
        
      />
    </div>
  );
}

const mapState = (state) => {
  return {
  value: state.value
  };
};

export default connect(mapState)(myApp);
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from "react-redux";

class Car extends React.Component {
  
  render() {
    return <div>
    <Calendar
    calendarType = 'US'
    value={new Date(this.props.y,this.props.m,this.props.d)}
    /></div>;
  }
}




const myApp = (props) => {
const [value, onChange] = useState(new Date());

console.log('props = ' + this.state)
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

export default connect(mapState)(Car);
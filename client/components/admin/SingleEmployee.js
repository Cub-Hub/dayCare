import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUsers, fetchDailyCheckin, fetchClockins } from "../../store";
import Clockin from "../employee/Clockin";

/**
 * COMPONENT
 */
const SingleEmployee = (props) => {

  const [change, setChange] = useState(() => false);

  const {id} = useParams()

  const curEmployee = props.users.find(employee => employee.id === id)

  const curClockins = props.employeeClockins.filter((clockin) => clockin.userId === id)

  const handleClick = () => {
    fetchClockins()
  }

  console.log('single employee props: ', curEmployee)

  return (
      <div>
          <div className='basicFlexColumn'>
          <div className='employeeTitle'>{curEmployee ? `${curEmployee.username} ${curEmployee.lastName}`:''}</div>
             <hr className='employeeHR'/> 
             <div onClick={handleClick} style={{width:'10rem'}}>
               <Clockin />  
             </div>
             
          </div>
        <div className='flexEmployee'>
        <div>
            <div stlye={{height:'50%'}}>
                <img src={curEmployee? curEmployee.imgURL : ''} />
            </div>
        </div>
        <div>
            <div className='employeeText' style={{marginTop: '2rem'}}>
                Current Status: {curEmployee ? 
                curEmployee.isActive ?
                <p style={{color:'green'}}>Clocked In</p>
                :
                <p style={{color:'red'}}>Clocked Out</p>
                :
                ''
            }
            </div>
            <br/>
            <div className='employeeText'>Today's Clockin History</div>
            <hr/>
            {curEmployee ? curClockins.map((clockin) => {
                return <div key={clockin.id}>{curEmployee.username} {clockin.clockedin ? 'Clocked in' : 'Clocked out'} today at {clockin.time}</div>
            }):''}
        </div>
    </div>
      </div>
  )
};

const mapState = (state) => {
  return state;
};

const mapDispatch = {
  fetchDailyCheckin,
  getUsers,
  fetchClockins
};
export default connect(mapState, mapDispatch)(SingleEmployee);
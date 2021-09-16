import React, {useState} from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import ApiCalendar from 'react-google-calendar-api'
import CalendarMini from './CalendarMini'


// Code based on example code in: https://www.npmjs.com/package/react-google-calendar-api
 
/**
 * COMPONENT
 */
// Thanks to Anthony W Jones: https://stackoverflow.com/questions/563406/add-days-to-javascript-date

  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  
  

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      startDateTime: '',
      endDateTime: '',
      listItems: {},
      value: new Date(),
      message: new Date(),
      message2: new Date() 
    }
    //this.authorizeClick = this.authorizeClick.bind(this);
    this.addItemClick = this.addItemClick.bind(this)
     // this.listItemsClick = this.listItemsClick.bind(this)
      this.displayDate = this.displayDate.bind(this)
  }

  componentDidMount() {
    ApiCalendar.setCalendar("s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com")
    //set Calendar to cub hub
  }

  myChangeHandlerEventName = (event) => {
    event.persist()
    this.setState({eventName: event.target.value})
    console.log(this.state)
  }
  
    myChangeHandlerStartDateTime = (event) => {
    event.persist()
    this.setState({startDateTime: event.target.value})
  }
  
    myChangeHandlerEndDateTime = (event) => {
    event.persist()
    this.setState({endDateTime: event.target.value})
  }
  
  authorizeClick() {
  //  ApiCalendar.handleAUthClick();
    
    ApiCalendar.handleAuthClick();
    console.log(ApiCalendar.isSignedIn)
    console.log("authroize")
  }
  
  signoutClick() {
    ApiCalendar.handleSignoutClick();
    console.log("signout")
        console.log(ApiCalendar.isAuthorized)
  }
  



  
  setCalendarClick() {
    ApiCalendar.setCalendar("s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com")
  }
  
  async addItemClick() {
    let eventObject = {summary: "Test Appointment", start: {date: '2021-09-09'}, end: {date: '2021-09-09'}}
    await ApiCalendar.createEvent(eventObject, "483108818708-m1agqu1kajjsrdg8pr967j7220r5rng9.apps.googleusercontent.com", "none")

    
  }

  displayDate() {
    console.log(this.state.value)
    console.log('hi')

  }
  
  callbackFunction = async(childData) => {

     await this.setState({message: childData})
    let rawResult = await ApiCalendar.listEvents({
      timeMin: (this.state.message.addDays(0)).toISOString(),
      timeMax: (this.state.message.addDays(1)).toISOString(),
      showDeleted: false,
      maxResults: 10,
      orderBy: "updated"
    })
    await this.setState({listItems: rawResult.result.items})
       
    console.log(this.state)
    
    
    
    
    
    console.log('message = ' + this.state.message.addDays(1))

  }

  

  
  render() {
    
    ApiCalendar.setCalendar("s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com")
    
    return (
      <div>
     
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Student Calendar
          </span>
        </h3>
   <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                       data-bs-toggle="tab"
                onClick={this.authorizeClick}
              >
                Sign-In
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                         data-bs-toggle="tab"
          onClick={this.signoutClick}
              >
                Sign-Out
              </a>
            </li>
            
          </ul>
        </div>


 

        {/*<button id="setCalendar_button"
          onClick={this.setCalendarClick}>
          Set Calendar to Cub Hub
        </button>*/}
        
       {/*  <button id="listItems_button"
          onClick={this.listItemsClick}>
          listItems
        </button> */}
        
     
        

        
      <div> {/*this.state.listitems.length === undefined ? */}
      <div style={{width: 300}}>
      
      
      
                     <span className="text-dark me-2 fs-6 fw-bolder">
                
                    
                          
                          
                          
      <ul>{this.state.listitems}{this.state.listItems.length === undefined ? <p>No items</p> : 
        this.state.listItems.map(x=>
        <li><div style={{height:60}}>{x.start.dateTime.slice(11,13)*1>12 ? x.start.dateTime.slice(11,13)*1-12:x.start.dateTime.slice(11,13)*1}
        :{x.start.dateTime.slice(14,16)} {x.start.dateTime.slice(11,13)*1>12?'PM':'AM'}<br></br>{x.summary}<br></br></div></li>)}</ul>      </span>
        
        
        
        
        
      </div>
  
      <div>
        <CalendarMini 
        parentCallback = {this.callbackFunction}/>
      </div>
      </div> 
          
    <pre id="content" style={{whiteSpace: "pre-wrap"}}></pre>
    

    
    </div>
    )
  }
}




/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.username
  }
}

export default connect(mapState)(CalendarPage)

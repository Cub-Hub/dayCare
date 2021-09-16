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
      this.listItemsClick = this.listItemsClick.bind(this)
      this.displayDate = this.displayDate.bind(this)
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
    console.log("authroize")
  }
  
  signoutClick() {
    ApiCalendar.handleSignoutClick();
    console.log("signout")
  }
  


  async listItemsClick() {
    
    
    
    let rawResult = await ApiCalendar.listEvents({
      timeMin: (this.state.message.addDays(0)).toISOString(),
      timeMax: (this.state.message.addDays(1)).toISOString(),
      showDeleted: true,
      maxResults: 10,
      orderBy: "updated"
    })
    await this.setState({listItems: rawResult.result.items})
    console.log(this.state)
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
    
    console.log('message = ' + this.state.message.addDays(1))

  }

  
  
  
  render() {
    return (
      <div>
      <script async defer src="https://apis.google.com/js/api.js"></script>
      <h3></h3>
      <iframe id = "FullCalendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=czR2Y3NsZjMwZzkxZzkycXU2ZjRzcWE3NGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D81B60&mode=WEEK&showTz=0&showCalendars=0&showTabs=1&showPrint=0&showDate=1&showNav=1&showTitle=0" style="border:solid 1px #777" width="2000" height="800" frameborder="0" scrolling="yes" style={{border: 0, frameborder:0, scrolling:"yes"}}></iframe>


    
        
      

          
    {/*<pre id="content" style={{whiteSpace: "pre-wrap"}}></pre>*/}
    

    
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

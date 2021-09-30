import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import ApiCalendar from 'react-google-calendar-api'
import CalendarMini from './CalendarMini'
import axios from 'axios'

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
        today: new Date(),
        message: new Date(),
        message2: new Date(),
        events: [],
        dateString: ''
      }
      this.addItemClick = this.addItemClick.bind(this)
      this.displayDate = this.displayDate.bind(this)
      this.getEvents = this.getEvents.bind(this)
      this.callbackFunction = this.callbackFunction.bind(this)
    }

    componentDidMount() {
      ApiCalendar.setCalendar("s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com")
    }

    myChangeHandlerEventName = (event) => {
      event.persist()
      this.setState({ eventName: event.target.value })
      console.log(this.state)
    }

    myChangeHandlerStartDateTime = (event) => {
      event.persist()
      this.setState({ startDateTime: event.target.value })
    }


    myChangeHandlerEndDateTime = (event) => {
      event.persist()
      this.setState({ endDateTime: event.target.value })
    }


    authorizeClick() {
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
      let eventObject = { summary: "Test Appointment", start: { date: '2021-09-09' }, end: { date: '2021-09-09' } }
      await ApiCalendar.createEvent(eventObject, "483108818708-m1agqu1kajjsrdg8pr967j7220r5rng9.apps.googleusercontent.com", "none")
    }


    displayDate() {
      console.log(this.state.value)
      console.log('hi')
    }


    callbackFunction = async(childData) => {
      // Get date from mini-calendar
      await this.setState({ message: childData.addDays(0) }) 
      console.log(this.state)
      let year = (this.state.message.addDays(0)).getUTCFullYear()
      let date = ('0' + this.state.message.getDate()).slice(-2)
      let month = ('0' + (this.state.message.getMonth() * 1 + 1)).slice(-2)
      let concat = year + '-' + month + '-' + date
      await this.setState({ dateString: concat })
      // Use the date to get events from Google REST
      await this.getEvents()
    }
    
    nextButton = async() => {
      // Get date from mini-calendar

      await this.setState({ message: this.state.message.addDays(1) })
      console.log(this.state)
      let year = (this.state.message.addDays(0)).getUTCFullYear()
      let date = ('0' + this.state.message.getDate()).slice(-2)
      let month = ('0' + (this.state.message.getMonth() * 1 + 1)).slice(-2)
      let concat = year + '-' + month + '-' + date
      await this.setState({ dateString: concat })
      // Use the date to get events from Google REST
      await this.getEvents()
      console.log(this.state)
      
      
      
    }
  
    previousButton = async() => {
      // Get date from mini-calendar
      await this.setState({ message: this.state.message.addDays(-1) })
      console.log(this.state)
      let year = (this.state.message.addDays(0)).getUTCFullYear()
      let date = ('0' + this.state.message.getDate()).slice(-2)
      let month = ('0' + (this.state.message.getMonth() * 1 + 1)).slice(-2)
      let concat = year + '-' + month + '-' + date
      await this.setState({ dateString: concat })
      // Use the date to get events from Google REST
      await this.getEvents()
    }
     
    async getEvents() {
      //Get events from google
      let dateString2 = await this.state.dateString
      await console.log('this.dateString = ' + this.state.dateString)
      try {
        const response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com/events?key=AIzaSyASYNYYK7IjZu0cqtnlXlOV1yxqmigiK5o&maxResults=2500&orderBy=updated&timeMin=' + dateString2 + 'T00%3A00%3A00%2B00%3A00&timeMax=' + dateString2 + 'T23%3A59%3A59%2B00%3A00&singleEvents=TRUE');
        await this.setState({ events: response.data.items })
        console.log(this.state)
      }
      catch (error) {
        console.error(error);
      }
    }

    render() {

        return (
            <div>
            
   
             <h2 className="block-title">Student Calendar</h2>
            
            
          <div id = "CalendarBox">
          <div id = "calendarSpace"></div>
            <div id = "Previous">
            
            
            
            
            
            
              <button className = 'calendarButtons' onClick = {this.previousButton}>{' << '}</button>
            </div>
            <div id = "CalendarLeft">
              <h3 className="card-title align-items-start flex-column">
              <center><span className="card-label fw-bolder text-dark fs-3">
                {this.state.today.toDateString() === this.state.message.toDateString() ? 'Today' : this.state.message.toDateString()}
              </span></center>
        </h3>
            <ul id='calendarEvents'>
            {this.state.events.sort((a,b) => (a.start.dateTime > b.start.dateTime) ? 1 : -1).map(x=><li className='calendarEventLine' key={x.id}><div id='eventListing'>{x.start.dateTime.slice(11,16)}{' '}{' '}{x.summary}</div></li>)}
            </ul>
            </div>
            <div id = "Next">
            <button className = 'calendarButtons' onClick = {this.nextButton}>{' >> '}</button>
            </div>
            <div id = "CalendarRight">
            <CalendarMini  parentCallback = {this.callbackFunction}/>
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
    state
  }
}

export default connect(mapState)(CalendarPage)

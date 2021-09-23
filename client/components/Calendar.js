import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import ApiCalendar from 'react-google-calendar-api'
import CalendarMini from './CalendarMini'


// Code based on example code in: https://www.npmjs.com/package/react-google-calendar-api

/**
 * COMPONENT
 */
// Thanks to Anthony W Jones: https://stackoverflow.com/questions/563406/add-days-to-javascript-date

Date.prototype.addDays = function (days) {
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
    await this.setState({ listItems: rawResult.result.items })
    console.log(this.state)
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

  callbackFunction = async (childData) => {
    await this.setState({ message: childData })

    console.log('message = ' + this.state.message.addDays(1))

  }




  render() {
    return (
      <div id="calendarpage">
        <div>
          <script async defer src="https://apis.google.com/js/api.js"></script>
          <h3 className="page-title">Calendar</h3>
          <iframe src="https://calendar.google.com/calendar/embed?src=s4vcslf30g91g92qu6f4sqa74c%40group.calendar.google.com&ctz=America%2FNew_York" style={{ border: 0, width: 800, height: 600, frameborder: 0, scrolling: "no" }}></iframe>
          <p>Google Calendar API Quickstart</p>

          <button id="authorize-button"
            onClick={this.authorizeClick}>
            Authorize
        </button>

          <button id="signout_button"
            onClick={this.signoutClick}>
            Sign Out
        </button>

          <button id="setCalendar_button"
            onClick={this.setCalendarClick}>
            Set Calendar to Cub Hub
        </button>

          <button id="listItems_button"
            onClick={this.listItemsClick}>
            listItems
        </button>

          <form>
            <h1>List of Events</h1>
            <ul>{this.state.listItems.length === undefined ? <p>No items</p> :
              this.state.listItems.map(x => <li>{x.start.dateTime.slice(11, 13) * 1 > 12
                ? x.start.dateTime.slice(11, 13) * 1 - 12 : x.start.dateTime.slice(11, 13) * 1}
        :{x.start.dateTime.slice(14, 16)}

                {x.start.dateTime.slice(11, 13) * 1 > 12 ? 'PM' : 'AM'}-{x.summary}</li>)}</ul>



            <h1>Add an Event</h1>
            <p>Event Name:</p><input type="text" name='eventName' onChange={this.myChangeHandlerEventName} />
            <p>Start DateTime:</p><input type="text" name='startDateTime' onChange={this.myChangeHandlerStartDateTime} />
            <p>End DateTime:</p><input type="text" name='endDateTime' onChange={this.myChangeHandlerEndDateTime} />
          </form>

          <button id="listItems_button"
            onClick={this.addItemClick}>
            Add Item
        </button>
          <h1>hello</h1>
          <tr>
            <td>
              <ul>{this.state.listItems.length === undefined ? <p>No items</p> :
                this.state.listItems.map(x => <li>{x.start.dateTime.slice(11, 13) * 1 > 12
                  ? x.start.dateTime.slice(11, 13) * 1 - 12 : x.start.dateTime.slice(11, 13) * 1}
        :{x.start.dateTime.slice(14, 16)}

                  {x.start.dateTime.slice(11, 13) * 1 > 12 ? 'PM' : 'AM'}-{x.summary}</li>)}</ul>
            </td>

            <td>
              <CalendarMini
                parentCallback={this.callbackFunction} />
            </td>
          </tr>

          <pre id="content" style={{ whiteSpace: "pre-wrap" }}></pre>
        </div>
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

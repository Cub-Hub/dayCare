import React from 'react'
import { connect } from 'react-redux'
import ApiCalendar from 'react-google-calendar-api'

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    let todaysDate = new Date()
    let todayYear = todaysDate.getFullYear()
    let todayMonth = ('0' + (todaysDate.getMonth() * 1 + 1)).slice(-2)
    let todayDate = ('0' + todaysDate.getDate()).slice(-2)
    console.log(todayMonth)
    this.state = {
      month: todayMonth,
      day1: todayDate,
      year: todayYear,
      startHour: '00',
      startMinute: '00',
      endHour: '00',
      endMinute: '00',
      summary: ''
    }
    this.authorizeClick = this.authorizeClick.bind(this);
    this.addItemClick = this.addItemClick.bind(this)
  }

  componentDidMount() {
    console.log(this.props.state.auth.typeId)
  }

  authorizeClick() {
    //console.log(ApiCalendar.sign)
    ApiCalendar.handleAuthClick();
  }

  signoutClick() {
    //    console.log(ApiCalendar.sign)
    ApiCalendar.handleSignoutClick();
  }

  setCalendarClick() {
    ApiCalendar.setCalendar("s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com")
  }

  async addItemClick() {
    await console.log(this.props)
    if(ApiCalendar.sign === false) {await this.authorizeClick()}
    await console.log(ApiCalendar.sign)

    let startString = this.state.year + '-' + this.state.month + '-' + this.state.day1 + 'T' + this.state.startHour + ':' + this.state.startMinute + ':00.000-0400'
    let endString = this.state.year + '-' + this.state.month + '-' + this.state.day1 + 'T' + this.state.endHour + ':' + this.state.endMinute + ':00.000-0400'
    await ApiCalendar.setCalendar("s4vcslf30g91g92qu6f4sqa74c@group.calendar.google.com")
    await ApiCalendar.createEvent({ summary: this.state.summary, start: { dateTime: startString }, end: { dateTime: endString } })
    document.getElementById('FullCalendar3').src = document.getElementById('FullCalendar3').src
  }

  render() {
    return (
      <div id='calendarDashboard'>
    
      <script async defer src="https://apis.google.com/js/api.js"></script>
   

      {this.props.state.auth.typeId === undefined || this.props.state.auth.typeId !== 2 ? <div></div> : <div className = 'block'>
      
             <h2 className="block-title">Student Calendar</h2>
      <input value = {this.state.summary} onChange={(e)=>{console.log(e.target.value);
        this.setState({summary: e.target.value})
      }}></input><br/>
      
      <select value={this.state.month} onChange={(e)=>{console.log(e.target.value);
        this.setState({month: e.target.value})
      }}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      
      <select value={this.state.day1} onChange={(e)=>{console.log(e.target.value);
        this.setState({day1: e.target.value})
      }}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
      
      <select value={this.state.year} onChange={(e)=>{console.log(e.target.value);
        this.setState({year: e.target.value})
      }}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      
      <br></br>
      {" "}H{" "}
      <select value={this.state.startHour} onChange={(e)=>{console.log(e.target.value);
        this.setState({startHour: e.target.value})
      }}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      {" "}M{" "}
      <select value={this.state.startMinute} onChange={(e)=>{console.log(e.target.value);
        this.setState({startMinute: e.target.value})
      }}>
        <option value="00">00</option>
        <option value="05">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
      </select>
        <br></br>
      {" "}H{" "}
      <select value={this.state.endHour} onChange={(e)=>{console.log(e.target.value);
        this.setState({endHour: e.target.value})
      }}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      {" "}M{" "}
      
      <select value={this.state.endMinute} onChange={(e)=>{console.log(e.target.value);
        this.setState({endMinute: e.target.value})
      }}>
        <option value="00">00</option>
        <option value="05">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
      </select>
    <br/><br/>
     {/*<button onClick = {this.authorizeClick}>Authorize</button><br/>
          <button onClick = {this.signoutClick}>Sign-Out</button><br/>*/}
          <button onClick = {this.addItemClick}>Add Event</button>
  </div>}
  
  
  
  <div id='bigCalendarRight' className = 'block'>
      <center><iframe id = "FullCalendar3" src="calendar.html" width = '1600' height = '700' scrolling = 'yes'></iframe></center>
    </div>
  
    </div>
    )
  }
}

const mapState = state => {
  return {
    state
  }
}

export default connect(mapState)(CalendarPage)
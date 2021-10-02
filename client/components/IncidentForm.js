import React from 'react'
import { connect } from 'react-redux'

//--------------------------------------------------------------------------------------------------

class Incidents extends React.Component {
    constructor(props) {
      super(props);
      let todaysDate = new Date()
      let todayYear = todaysDate.getFullYear()
      let todayMonth = ('0' + (todaysDate.getMonth() * 1 + 1)).slice(-2)
      let todayDate = ('0' + todaysDate.getDate()).slice(-2)
      console.log(todayMonth)
      this.state = {
                      
      currentPage: 0,
      
         data: [{id:0,name: 'Anny',
             teacher: 'Old Mother',
             phoneNumber: '132-132-1323',
             location: 'Playground',
             date: '1/1/2020',
             time: '2pm',
             incidentDetails: 'Cracked head open on playground monkey bars',
             incidentCauses: 'Unsafe playing',
             followUpRecommendations: 'Play safer',
             reporter: 'A. Hamilton',
             position: 'Student Aide',
             department: 'Safety'
         },
         {id:1,name: 'Bovee',
             teacher: 'Old Father',
             phoneNumber: '136-900-2543',
             location: 'Classroom',
             date: '2/2/2021',
             time: '3pm',
             incidentDetails: 'Threw up and slipped on vomit',
             incidentCauses: 'Vomit wasnt wiped up fast enough',
             followUpRecommendations: 'Child instructed not to eat untasty food',
             reporter: 'A Jansen',
             position: 'Janitor',
             department: 'Cleaning'},
         {id:2,name: 'Cody',
             teacher: 'Old Grandpa',
             phoneNumber: '444-323-4354',
             location: 'Bathroom',
             date: '3/3/2021',
             time: '4pm',
             incidentDetails: 'Drank water and had tummy ache',
             incidentCauses: 'They shouldnt drink from the toilet',
             followUpRecommendations: 'Inform child not to drink from toilet',
             reporter: 'A Jansen',
             position: 'Janitor',
             department: 'Cleaning'},
         {id:3,name: 'Dustin',
             teacher: 'Old Grandma',
             phoneNumber: '264-200-3111',
             location: 'Street',
             date: '4/4/2021',
             time: '5pm',
             incidentDetails: 'Fell down on the street on a banana peel',
             incidentCauses: 'Children need to look at the ground',
             followUpRecommendations: 'Tell student to avoid banana peels in the future',
             reporter: 'Buff Police Officer',
             position: 'Sheriff',
             department: 'Police'},
        {id:4,name: 'Eve',
             teacher: 'Old Mother',
             phoneNumber: '132-132-1323',
             location: 'Playground',
             date: '1/1/2020',
             time: '2pm',
             incidentDetails: 'Cracked head open on playground monkey bars',
             incidentCauses: 'Unsafe playing',
             followUpRecommendations: 'Play safer',
             reporter: 'A. Hamilton',
             position: 'Student Aide',
             department: 'Safety'
         },
         {id:5,name: 'Frank',
             teacher: 'Old Father',
             phoneNumber: '136-900-2543',
             location: 'Classroom',
             date: '2/2/2021',
             time: '3pm',
             incidentDetails: 'Threw up and slipped on vomit',
             incidentCauses: 'Vomit wasnt wiped up fast enough',
             followUpRecommendations: 'Child instructed not to eat untasty food',
             reporter: 'A Jansen',
             position: 'Janitor',
             department: 'Cleaning'},
         {id:6,name: 'George',
             teacher: 'Old Grandpa',
             phoneNumber: '444-323-4354',
             location: 'Bathroom',
             date: '3/3/2021',
             time: '4pm',
             incidentDetails: 'Drank water and had tummy ache',
             incidentCauses: 'They shouldnt drink from the toilet',
             followUpRecommendations: 'Inform child not to drink from toilet',
             reporter: 'A Jansen',
             position: 'Janitor',
             department: 'Cleaning'},
         {id:7,name: 'Howard',
             teacher: 'Old Grandma',
             phoneNumber: '264-200-3111',
             location: 'Street',
             date: '4/4/2021',
             time: '5pm',
             incidentDetails: 'Fell down on the street on a banana peel',
             incidentCauses: 'Children need to look at the ground',
             followUpRecommendations: 'Tell student to avoid banana peels in the future',
             reporter: 'Buff Police Officer',
             position: 'Sheriff',
             department: 'Police'}
        
        ]
      }
      //this.authorizeClick = this.authorizeClick.bind(this);
      //this.addItemClick = this.addItemClick.bind(this)
      //this.previous = this.previous.bind(this);
      //this.next = this.next.bind(this);
      
  }  

  componentDidMount() {
    console.log(this.props.state.auth.typeId)
  }
  
 /* createTable() {
    const Incident = db.define('incident', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
    })
  }
*/  
  
  previousButton = async() => {
      let x = this.state.currentPage * 1
      x--
      if (x===-1){x=0}
      await this.setState({ currentPage: x })

  }
  
    nextButton = async() => {
    // Get date from mini-calendar
      let x = this.state.currentPage * 1
      x++
      if(x>=this.state.data.length){x=this.state.data.length-1}
      await this.setState({currentPage:x})

  }
  
  
  render(){
   
   return (
    <div className = 'calendarDashboard'>
    <div id="bigBlock" className = "block">


    <h3><center>CubHub Incident Reports</center></h3>
  <h4><center><button onClick={this.previousButton}><img src='leftArrow.png' className = 'buttonPic'/></button>
<button onClick={this.nextButton}><img src='rightArrow.png' class = 'buttonPic'/></button></center></h4>
  <div class="item">EMPLOYEE DETAILS</div>
  <div class="grid-container">
  <div class="item3">NAME<input class ='whiteInput' value={this.state.data[this.state.currentPage].name}/></div>  
  <div class="item4">TEACHER<input class='whiteInput' value={this.state.data[this.state.currentPage].teacher}/></div>
  <div class="item5">PHONE NUMBER<input class='whiteInput' value={this.state.data[this.state.currentPage].phoneNumber}/></div>
  </div>
  
  <div class="item">DESCRIPTION OF INCIDENT</div>
  <div class="grid-container">
  <div class="item6">Location<input class='whiteInput' value={this.state.data[this.state.currentPage].location}/></div>
  <div class="item7">Date<input class='whiteInput' value={this.state.data[this.state.currentPage].date}/></div>  
  <div class="item8">Incident Details<input class='whiteInput' value={this.state.data[this.state.currentPage].incidentDetails}/></div>  
   <div class="item9">Time<input class='whiteInput' value={this.state.data[this.state.currentPage].time}/></div>  
    <div class="item10">Police Notified<br/><input type="checkbox" />Yes<br/>
    <input type="checkbox" />No<br/><br/></div>  
</div>

  <div class="item"><br/> </div>
  <div class="grid-container">
  <div class="item11">Incident Causes:</div>
  <div class="item12">Follow Up Recommendations:</div>  
  <div class="item13"><br/><input class='whiteInput' value={this.state.data[this.state.currentPage].incidentCauses}/></div>  
   <div class="item14"><br/><input class='whiteInput' value={this.state.data[this.state.currentPage].followUpRecommendations}/></div>  
</div>

  <div class="item"><br/> </div>
  <div class="grid-container">
  <div class="item15">Incident reports are necessary...</div>
  <div class="item16">REPORTED BY:<br/>Name:<input className='whiteInput' value={this.state.data[this.state.currentPage].reporter}/>
  <br/>Position:<input class='whiteInput' value={this.state.data[this.state.currentPage].position}/><br/>
  Department:<input class='whiteInput' value={this.state.data[this.state.currentPage].department}/></div>  
  
</div>




</div>
    
 </div>) }
}

const mapState = state => {
  return {
    state
  }
}

export default connect(mapState)(Incidents)
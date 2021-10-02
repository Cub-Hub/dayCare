import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import { Link } from 'react-router-dom';

const StripeSubscriptionSuccess = (props) =>{
  const { auth } = props
  const [ sessions, setSessions ] = useState( ()=> [] )

  useEffect(()=>{
    async function getSessionId (){
      const sessions = (await axios.get(`/api/getsessionid/${auth.id}`)).data
      setSessions(sessions)
    }
    getSessionId()
  }, [])

  const manageSubscription = async(sessionId) =>{
    const { data } = await axios.post(`/api/create-portal-session/${sessionId}`)
    window.location = data.url
  }

  return (
    <div id='stripe-success'> 
      <div id='subs-init'>
        <h3>Subscription Initiated !</h3>
      </div>
    <div id='subs-btns'>
      {
        sessions.map( session => {
          return (
            <button key={session.id}  className="btn btn-outline-info" onClick={()=> manageSubscription(session.sessionId)}>
              {`Manage Subscription #${session.id}`}
            </button>
          )
        })
      }
    </div>
    <div clasName='home-btn' className="text-center pt-7">
      <Link to='/home' className="btn btn-primary fw-bolder fs-6 px-7 py-3">
        Home
      </Link>
    </div>
  </div>
  )
}

const mapState = (state) =>{
  return {
    auth: state.auth
  }
}

export default connect(mapState)(StripeSubscriptionSuccess)
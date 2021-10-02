import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import { _activeSubcription } from '../../store/stripe'

const ManageSubscription = (props) => {
  const { auth, activeSubscription } = props
  const [ sessions, setSessions ] = useState( ()=> [] )
  const [amount, setAmount] = useState( ()=> 0 )

  useEffect(()=>{
    async function getSessionId (){
      const sessions = (await axios.get(`/api/getsessionid/${auth.id}`)).data
      setSessions(sessions)
    }
    getSessionId()
  }, [])

  useEffect(()=>{
    (sessions.length > 0 ? activeSubscription(sessions.length): '')
    setAmount(sessions.length)
  }, [sessions])

  const manageSubscription = async(sessionId) =>{
    const { data } = await axios.post(`/api/create-portal-session/${sessionId}`)
    window.location = data.url
  }

  return (
    <div className='manage-subscription'>
      <h1 id='active-subs-title'> {amount} Active Subscriptions </h1>
      <div className='multi-subs-btns' >
        {
          sessions.map( session => {
            return (
              <button key={session.id} className='multi-subs-btn'  className="btn btn-outline-info" onClick={()=> manageSubscription(session.sessionId)}>
                {`Manage Subscription #${session.id}`}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

const mapState = (state) =>{
  return {
    auth: state.auth,
    stripe : state.stripe
  }
}
const mapDispatch = (dispatch) =>{
  return {
    activeSubscription: () => dispatch(_activeSubcription())
  }
}

export default connect(mapState, mapDispatch)(ManageSubscription)

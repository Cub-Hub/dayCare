import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import axios from 'axios'

const StripeSubscriptionSuccess = (props) =>{
  const { auth } = props

  const [ sessionId, setSessionId ] = useState(()=>(''))

  useEffect(()=>{
    async function getSessionId (){
      const session = (await axios.get(`/api/getsessionid/${auth.id}`)).data[0]
      console.log('SESSION ID FOUND--->', session.sessionId)
      setSessionId(session.sessionId)
    }
    getSessionId()
  }, [])

  const handleSubmit = async (evt) =>{
    evt.preventDefault()
    //await axios.post(checkout-and-portal-button)
  }

  return (
    <section>
    <div >
      <div>
        <h3>Subscription to starter plan successful!</h3>
      </div>
    </div>
    <form onSubmit={handleSubmit} action="/create-portal-session" method="POST">
      <input
        type="hidden"
        id="session-id"
        name="session_id"
        value={sessionId}
      />
      <button id="checkout-and-portal-button" type="submit">
        Manage your billing information
      </button>
    </form>
  </section>
  )
}

const mapState = (state) =>{
  return {
    auth: state.auth
  }
}

export default connect(mapState)(StripeSubscriptionSuccess)
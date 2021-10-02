import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

const Checkout = (props) =>{
  const { auth, stripe } = props
  const [active, setActive] = useState(()=> false)

  const handleSingleSubmit = async (evt) =>{
    const { data } = await axios.post('/api/create-checkout-session/')
    window.location = data.url
  }
  const handleSubscriptionSubmit = async () =>{
    const { data } = await axios.post('/api/create-checkout-session/subscription', {lookup_keys: '1subscription'})
    await axios.post(`/api/addsession/${auth.id}/${data.sessionId}`)
    window.location = data.url
  }
  
return (
  <div className='invoices'>
    <div className="product">
      <div className="description">
        <h3>Day Care Standard Plan</h3>
        <h5>$199.99 / day</h5>
      </div>
    </div>
    <div>
      <button id='single-pay-btn' className="btn btn-outline-warning"  onClick={()=> handleSingleSubmit()} >
        Single Payment
      </button>
    </div>
      <div>
         <button id='subscribe-monthly-btn' className="btn btn-outline-info" onClick={()=> handleSubscriptionSubmit()} >
          Subscribe Monthly
        </button>
      </div>
  </div>
 )
}

const mapState =(state) =>{
  return {
    auth: state.auth, 
    stripe: state.stripe
  }
}

export default connect(mapState)(Checkout)


import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

const Checkout = (props) =>{
  const { auth } = props

  const handleSingleSubmit = async (evt) =>{
    evt.preventDefault()
    const { data } = await axios.post('/api/create-checkout-session/')
    window.location = data.url
  }
  const handleSubscriptionSubmit = async (evt) =>{
    evt.preventDefault()
    const { data } = await axios.post('/api/create-checkout-session/subscription', {lookup_keys: '1subscription'})
    console.log('subscription data--->', data)
    await axios.post(`/api/addsession/${auth.id}/${data.sessionId}`)
    window.location = data.url
  }
  
return (
  <div>
    <section>
       <div className="product">
        <div className="description">
          <h3>Day Care Standard Plan</h3>
          <h5>$199.99 / day</h5>
        </div>
      </div>
      <form onSubmit={handleSingleSubmit}>
        <button type="submit">
          Single Payment
        </button>
      </form>
    </section>
    <section>
      <div>
        <form onSubmit={handleSubscriptionSubmit}>
          <button type='submit'>
            Monthly Subscription
          </button>
        </form>
      </div>
    </section>
  </div>
 )
}

const mapState =(state) =>{
  return {
    auth: state.auth
  }
}

export default connect(mapState)(Checkout)
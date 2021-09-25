import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

const Checkout = (props) =>{
  const { auth } = props

  const handleSingleSubmit = async (evt) =>{
    const { data } = await axios.post('/api/create-checkout-session/')
    console.log('REDIRECT SINGLE PAY URL--->', data.url)
    window.location = data.url
  }
  const handleSubscriptionSubmit = async () =>{
    const { data } = await axios.post('/api/create-checkout-session/subscription', {lookup_keys: '1subscription'})
    await axios.post(`/api/addsession/${auth.id}/${data.sessionId}`)
    console.log('REDIRECT SUBSCRIPTION URL--->', data.url)
    window.location = data.url
  }
  
return (
  <div>
    <div className="product">
      <div className="description">
        <h3>Day Care Standard Plan</h3>
        <h5>$199.99 / day</h5>
      </div>
    </div>
    <div>
      <button onClick={ ()=> handleSingleSubmit() } >
        Single Payment
      </button>
    </div>
    <div>
      <button onClick={ ()=> handleSubscriptionSubmit() } >
        Monthly Subscription
      </button>
    </div>
  </div>
 )
}

const mapState =(state) =>{
  return {
    auth: state.auth
  }
}

export default connect(mapState)(Checkout)

{/* <div>
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
</div> */}
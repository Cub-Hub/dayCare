import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

const Checkout = (props) => {
  const { auth, stripe } = props
  const [active, setActive] = useState(() => false)

  const handleSingleSubmit = async (evt) => {
    const { data } = await axios.post('/api/create-checkout-session/')
    window.location = data.url
  }
  const handleSubscriptionSubmit = async () => {
    const { data } = await axios.post('/api/create-checkout-session/subscription', { lookup_keys: '1subscription' })
    await axios.post(`/api/addsession/${auth.id}/${data.sessionId}`)
    window.location = data.url
  }

  return (
    <div className='invoices'>
      <div>
        <div className="product">
          <div>
            <h3 className="block-title">Day Care Standard Plan</h3>
            <p>$199.99 / day</p>
          </div>
          <div>
            <button className="btn btn-outline-warning button" onClick={() => handleSingleSubmit()} >
              Single Payment
          </button>
          </div>
          <div>
            <button className="btn btn-outline-info button-secondary" onClick={() => handleSubscriptionSubmit()} >
              Subscribe Monthly
        </button>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapState = (state) => {
  return {
    auth: state.auth,
    stripe: state.stripe
  }
}

export default connect(mapState)(Checkout)


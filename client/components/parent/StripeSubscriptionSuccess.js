import React from 'react'

const StripeSubscriptionSuccess = () =>{
  return (
    <section>
    <div >
      <div>
        <h3>Subscription to starter plan successful!</h3>
      </div>
    </div>
    <form action="/create-portal-session" method="POST">
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
export default StripeSubscriptionSuccess
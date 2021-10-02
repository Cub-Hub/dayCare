import React from 'react'
import Checkout from './Checkout'
import ManageSubscription from './ManageSubscription'


const Invoices = () => {
  return (
    <div id="parent-billing-page">
      <Checkout />
      <ManageSubscription />
    </div>
  )
}

export default Invoices
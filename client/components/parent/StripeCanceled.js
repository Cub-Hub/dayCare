import React from 'react'
import { Link } from 'react-router-dom';

const StripeCanceled = () =>{
  return (
    <div id='stripe-cancel-div'>
      <p className='pay-failed'>
        Payment failed, please try again !
      </p>
      <div id='stripe-cancel-redirect-btn' className="text-center pt-7">
        <Link to='/invoices' className="btn btn-primary fw-bolder fs-6 px-7 py-3">
          Try Again
        </Link>
      </div>
    </div>
  )
}
export default StripeCanceled
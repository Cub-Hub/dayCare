import React from 'react'
import { Link } from 'react-router-dom';

const StripeCanceled = () => {
  return (
    <div id='stripe-cancel-page'>
      <div>
        <p className='block-title failed'>
          Payment failed, please try again !
        </p>
        <div id='stripe-cancel-redirect-btn' className="text-center pt-7">
          <Link to='/invoices' className="button">
            Try Again
          </Link>
        </div>
      </div>

    </div>
  )
}
export default StripeCanceled
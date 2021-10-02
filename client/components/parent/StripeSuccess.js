import React from 'react'
import { Link } from 'react-router-dom';

const StripeSuccess = () =>{
  return (
    <div>
      <div id='subs-init'>
        <h3>Thank you for payment !</h3>
      </div>
      <div className='home-btn' className="text-center pt-7">
        <Link to='/home' className="btn btn-primary fw-bolder fs-6 px-7 py-3">
          Home
        </Link>
      </div>
    </div>
  )
}
export default StripeSuccess
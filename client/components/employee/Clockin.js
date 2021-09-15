import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const Clockin = props => {
  const {username} = props
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const handleClockin = () => {
      await axios.post('/api/employee/clockin')
  }

  console.log(props)

  return (
    <div className="col-xl-4">
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className={`card-body pb-0 ${innerPadding}`}>
        {/* begin::Wrapper */}
        <div className="d-flex flex-column h-100">
          {/* begin::Text */}
          <h3 className="text-dark text-center fs-1 fw-bolder pt-15 lh-lg">
            Clockin
          </h3>
          <div className="text-center pt-7">
          <button className='blankBtn' onClick={handleClockin}>
              <i class="fa fa-clock-o fa-5x" aria-hidden="true"></i>
          </button>
          </div>
          <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px"></div>

          {/* end::Image */}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Body */}
    </div>
  </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Clockin)
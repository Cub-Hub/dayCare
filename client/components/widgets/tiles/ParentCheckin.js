import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const ParentCheckin = (props) => {
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  return (
    <div className="col-xl-4">
      <div className={`card ${className}`}>
        {/* begin::Body */}
        <div className={`card-body pb-0 ${innerPadding}`}>
          {/* begin::Wrapper */}
          <div className="d-flex flex-column h-100">
            {/* begin::Text */}
            <h3 className="text-dark text-center fs-1 fw-bolder pt-15 lh-lg">
              Online Checkin
            </h3>
            <div className="text-center pt-7">
              <a className="btn btn-primary fw-bolder fs-6 px-7 py-3">
                Checkin Now
              </a>
            </div>
            <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px"></div>

            {/* end::Image */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Body */}
      </div>
    </div>
  );
};

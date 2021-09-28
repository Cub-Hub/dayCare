import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const ParentBill = (props) => {
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  return (
    <div>
      <div className="parentShortcuts">
        {/* begin::Body */}
        <div>
          {/* begin::Wrapper */}
          <div className="d-flex flex-column h-100">
            {/* begin::Text */}
            <h3 className="block-title">
              Bill management
            </h3>
            <Link to='/invoices' className="button">
              Review invoices
                </Link>
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

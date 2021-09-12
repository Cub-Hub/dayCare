/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { fetchChildren } from "../../store";
import { connect } from "react-redux";

const TableWidget3 = (props) => {
  const className = "card-stretch mb-5 mb-xxl-8";
  const [children, setChildren] = useState(() => []);
  
  useEffect(() => {
    props.fetchChildren(props.parentId);
  }, []);

  // useEffect(() => {
  //   setChildren();
  //   return 'Set children';
  // }, []);

  console.log('children table props: ', props)

  return (
    <div className={`card ${className}`}>
      {/* begin::Header*/}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">My Children</span>
          <span className="text-muted mt-2 fw-bold fs-6">{`(${props.myChildren.length})`}</span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown*/}
          {/* <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="hover"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            Click me
          </button>
          <Dropdown1 /> */}
          {/* end::Dropdown*/}
        </div>
      </div>
      {/* end::Header*/}

      {/* begin::Body*/}
      <div className="card-body pt-0">
        {/* begin::Table*/}
        <div className="table-responsive">
          <table className="table table-borderless align-middle mb-0">
            <thead>
              <tr>
                <th className="p-0 w-50px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-70px"></th>
              </tr>
            </thead>
            <tbody>
              {props.myChildren[0] ?
              props.myChildren.map((child) => {
                return(
                  <tr key={child.id}>
                  <td className="ps-0">
                    <div className="symbol symbol-55px me-2 mt-1">
                      <span className="symbol-label align-items-end"></span>
                    </div>
                  </td>
                  <td className="ps-0">
                    <img
                      alt="icon"
                      src={`${child.imgURL}`}
                      className="childPic"
                    />
                    <span className="text-muted fw-bold d-block mt-1">
                      {`${child.firstName} ${child.lastName}`}
                    </span>
                  </td>
                  <td className="text-end pe-0">
                    <a href="#" className="btn btn-icon btn-twitter btn-sm me-3">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-icon btn-facebook btn-sm">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </td>
                  <td className="text-end pe-0">
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    ></a>
                  </td>
                </tr>
                )
              })
  
              :
              <tr><td>
                <span>'You have no students enrolled on this platform'</span>
                </td></tr>
              }
              </tbody>
          </table>
        </div>
        {/* end::Table*/}
      </div>
      {/* end: Card Body*/}
    </div>
  );
};

const mapState = (state) => {
  return {
    parentId: state.auth.id,
    myChildren: state.children
  };
};

const mapDispatch = {
    fetchChildren
};

export default connect(mapState, mapDispatch)(TableWidget3);
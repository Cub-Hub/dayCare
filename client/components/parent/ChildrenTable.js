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
    <div id="childrenTable">
      {/* begin::Header*/}
      <div>
        <h3 className="block-title">All my children <span>({`${props.myChildren.length}`})</span>
        </h3>
        <div>
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
      <div>
        {/* begin::Table*/}
        <div>
          <table>
            {/* <thead>
              <tr>
                <th className="p-0 w-50px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-70px"></th>
              </tr>
            </thead> */}
            <tbody>
              {props.myChildren[0] ?
                props.myChildren.map((child) => {
                  return (
                    <tr key={child.id} className="childCard">
                      <td>
                        <img
                          alt="icon"
                          src={`${child.imgURL}`}
                          className="childPic"
                        />
                        <p>
                          {`${child.firstName} ${child.lastName}`}
                        </p>
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
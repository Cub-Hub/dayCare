import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, fetchDailyCheckin } from "../../../store";

/**
 * COMPONENT
 */
const Ratios = (props) => {

  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const checkins = props.checkins.map((check) => check.studentId);

  const checkedStudents = props.students.filter((student) =>
    checkins.includes(student.id)
  );

  const activeEmployees = props.users.filter((user) => user.isActive);

  console.log("this activeEmployees~~ ", props);

  return (
    <div className="table-responsive block">
      <div className="flexBetween">
        <span className="text-dark me-2 fs-6 fw-bolder" id="centeredColumn">
          Group
        </span>
        <span className="text-dark me-2 fs-6 fw-bolder">
          Status & Student/Employee Ratio
        </span>
      </div>
      <table className="table table-borderless align-middle">
        <thead>
          <tr>
            <th className="p-0 w-50px"></th>
            <th className="p-0 min-w-200px"></th>
            <th className="p-0 min-w-100px"></th>
            <th className="p-0 min-w-40px"></th>
          </tr>
        </thead>
        <tbody>
          {props.groups.map((group) => {
            const activeEmp = group.users.filter(
              (user) => user.isActive
            ).length;
            const checkedStu = group.students.filter((student) =>
              checkins.includes(student.id)
            ).length;
            const curRatio =
              checkedStu / (activeEmp * (group.category.id * 2 + 2));
            return (
              <tr key={group.id}>
                <th className="ps-0 py-3">
                  <div className="symbol symbol-65px me-3">
                    <span className="symbol-label bg-light-success"></span>
                  </div>
                </th>
                <td className="ps-0">
                  <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                    {group.name}
                  </a>
                  <span className="text-muted fw-bold d-block mt-1">
                    {group.category.name} (Max per Employee:{" "}
                    {group.category.id * 2 + 2})
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-3">
                    <div className="d-flex align-items-center">
                      <div>
                        {curRatio > 1 ? (
                          <i
                            className="fa fa-window-close"
                            id="dangerMark"
                            aria-hidden="true"
                          ></i>
                        ) : curRatio > 0.90 ? (
                          <i
                            className="fa fa-exclamation-triangle"
                            id="warningMark"
                            aria-hidden="true"
                          ></i>
                        ) : (
                              <i
                                className="fa fa-check"
                                id="checkMark"
                                color="tomato"
                                aria-hidden="true"
                              ></i>
                            )}
                      </div>
                      <span className="text-muted fs-7 fw-bold ps-3">
                        {checkedStu} / {activeEmp}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-end pe-0">
                  <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                </td>
              </tr>
            );
          })}

          {/*~~~~~~~~~~~~~~~~~~~~end of table row~~~~~~~~~~~~~~~~~ */}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return state;
};

const mapDispatch = {
  fetchDailyCheckin,
  getUsers,
};

export default connect(mapState, mapDispatch)(Ratios);

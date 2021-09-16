import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDailyCheckin, getStudents } from "../../../store";

/**
 * COMPONENT
 */
const Ratios = (props) => {
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";


  useEffect(() => {
    props.fetchDailyCheckin();
  }, []);
  
  useEffect(() => {
    props.getStudents();
  }, []);

  return (
    <div className="table-responsive">
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
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-success"></span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        New Users
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "53%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            53%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-danger"></span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Weekly Bestsellers
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "110%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            92%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-primary"></span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Top Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "46%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            46%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-warning"></span>
                      </div>
                    </td>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Popular Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, VueJS, Laravel
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "87%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            87%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  );
};

const mapState = (state) => {
    return state
  };
  
  const mapDispatch = {
    fetchDailyCheckin,
    getStudents,
  };
  
  export default connect(mapState, mapDispatch)(Ratios);
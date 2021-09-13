import React, { useEffect, useState } from "react";
import { fetchDailyCheckin, getStudents } from "../../store";
import { connect } from "react-redux";
import {Button, Modal} from 'react-bootstrap'

const StudentTable = (props) => {
  const [modal, setModal] = useState(() => false);
  const [checked, setChecked] = useState(() => []);

  useEffect(() => {
    props.fetchDailyCheckin();
  }, []);
  
  useEffect(() => {
    props.getStudents();
  }, []);

  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  console.log("props of tablewidget~~~~~~~~~: ", props);

  const infantList = props.state.students.filter((student) => {
    return student.categoryId === 1;
  });

  const toddlerList = props.state.students.filter((student) => {
    return student.categoryId === 2;
  });

  const preschoolerList = props.state.students.filter((student) => {
    return student.categoryId === 3;
  });

  const kinderList = props.state.students.filter((student) => {
    return student.categoryId === 4;
  });

  const checkins = props.state.checkins.map((check) => check.studentId);

  const checkedInfants = infantList.filter((student) =>
    checkins.includes(student.id)
  );

  const checkedToddlers = toddlerList.filter((student) =>
    checkins.includes(student.id)
  );

  const checkedPreschoolers = preschoolerList.filter((student) =>
    checkins.includes(student.id)
  );

  const checkedKinders = kinderList.filter((student) =>
    checkins.includes(student.id)
  );

  const handleModal = (type) => {
    if (!modal) {
      let nameStr = ''
      type.forEach((student) => {
        return (
          nameStr += `  ${student.firstName} ${student.lastName}  ||`
          )
      })
      console.log('the type!!!', nameStr)
      setChecked(nameStr)
      setModal(true);
    } else {
      setChecked([])
      setModal(false);
    }
  };

  return (
    <div className={`card ${className}`}>
      {/* <!--begin::Header--> */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Student Data
          </span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                Daily Attendance
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                Room Ratios
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_3"
              >
                Absent Students
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Modal show={modal}> 
      <Modal.Header>Checked In Students</Modal.Header>
      <Modal.Body>
        <p>{`${checked}`}</p>
      </Modal.Body>
      <Modal.Footer><Button onClick={handleModal}>Close</Button></Modal.Footer>
      </Modal>

      {/* <!--end::Header--> */}

      {/* <!--begin::Body--> */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="tab-content mt-5" id="myTabTables1">
          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
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
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label bg-light-success"></span>
                      </div>
                    </th>
                    <td className="ps-0">
                      {/*~~~~~~~~~~~~MODAL~~~~~~~~~~~~~ */}
                      <button className='blankBtn' onClick={() => handleModal(checkedInfants)}>
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Infants
                      </a>
                      </button>
                      {/*~~~~~~~~~~~~~~~~~~MODAL END~~~~~~~~~~~~~ */}
                      <span className="text-muted fw-bold d-block mt-1">
                        (Less than 1 yr olds)
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Check in Count
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{
                                width: `${
                                  (checkedInfants.length / infantList.length) *
                                  100
                                }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            {`${checkedInfants.length}/${infantList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-warning"></span>
                      </div>
                    </td>
                    <td className="ps-0">
                    <button className='blankBtn' onClick={() => handleModal(checkedToddlers)}>
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Toddlers
                      </a>
                      </button>
                      <span className="text-muted fw-bold d-block mt-1">
                        (1 - 2 yr olds)
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Check in Count
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{
                                width: `${
                                  (checkedToddlers.length /
                                    toddlerList.length) *
                                  100
                                }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            {`${checkedToddlers.length}/${toddlerList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-success "></span>
                      </div>
                    </th>
                    <td className="ps-0">
                    <button className='blankBtn' onClick={() => handleModal(checkedPreschoolers)}>
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Preschoolers
                      </a>
                      </button>
                      <span className="text-muted fw-bold d-block mt-1">
                        (3 to 5 yr olds)
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Check in Count
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width: `${
                                  (checkedPreschoolers.length /
                                    preschoolerList.length) *
                                  100
                                }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            {`${checkedPreschoolers.length}/${preschoolerList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td>
                  </tr>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-danger"></span>
                      </div>
                    </th>
                    <td className="ps-0">
                    <button className='blankBtn' onClick={() => handleModal(checkedKinders)}>
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Kindergarteners
                      </a>
                      </button>
                      <span className="text-muted fw-bold d-block mt-1">
                        (5 - 6 yr olds)
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Check in Count
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{
                                width: `${
                                  (checkedKinders.length / kinderList.length) *
                                  100
                                }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            {`${checkedKinders.length}/${kinderList.length}`}
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
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}

          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_2"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
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
                              style={{ width: "92%" }}
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
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}

          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_3"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
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
                    <td className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-warning me-3">
                        <span className="symbol-label"></span>
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
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-success me-3">
                        <span className="symbol-label"></span>
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
                      <div className="symbol symbol-65px bg-light-primary me-3">
                        <span className="symbol-label"></span>
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
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-danger me-3">
                        <span className="symbol-label"></span>
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
                              style={{ width: "92%" }}
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
                </tbody>
              </table>
            </div>
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    state,
  };
};

const mapDispatch = {
  fetchDailyCheckin,
  getStudents,
};

export default connect(mapState, mapDispatch)(StudentTable);

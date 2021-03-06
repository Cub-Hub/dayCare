import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from 'react-bootstrap'
import Ratios from "./studentTable/Ratios";
import GroupStatus from "./studentTable/GroupStatus";

const StudentTable = (props) => {
  const [modal, setModal] = useState(() => false);
  const [selectedStudents, setSelectedStudents] = useState(() => false);
  const [pages, setPages] = useState(() => false)

  const prev = 'prev'
  const next = 'next'


  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  const infantList = props.students.filter((student) => {
    return student.categoryId === 1;
  });

  const toddlerList = props.students.filter((student) => {
    return student.categoryId === 2;
  });

  const preschoolerList = props.students.filter((student) => {
    return student.categoryId === 3;
  });

  const kinderList = props.students.filter((student) => {
    return student.categoryId === 4;
  });

  const checkins = props.checkins.map((check) => check.studentId);

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
      if (!pages) { setPages([0, 1, 2, 3]) }
      setSelectedStudents(type)
      setModal(true);
    } else {
      setPages(false)
      setModal(false);
    }
  };

  const handlePage = (type) => {
    if (type === 'next') setPages([pages[3] + 1, pages[3] + 2, pages[3] + 3, pages[3] + 4])
    if (type === 'prev') setPages([pages[0] - 4, pages[0] - 3, pages[0] - 2, pages[0] - 1])
  }

  // console.log("props of tablewidget~~~~~~~~~: ", props );

  // console.log('CHECK THIS', props)
  return (
    <div className="block">
      {/* <!--begin::Header--> */}
      <div className="col2">
        <h3 className="block-title sidepanel align-items-start flex-column">
          Daily Overview
        </h3>
        <div className="card-toolbar">
          <ul id="tabs-wrapper" className="nav nav-pills nav-pills-sm nav-light">
            <li id="tab-item-link" className="nav-item tab-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                Attendance
              </a>
            </li>
            <li id="tab-item-link" className="nav-item tab-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                Room Ratios
              </a>
            </li>
            <li id="tab-item-link" className="nav-item tab-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_3"
              >
                Room Status
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* 
        put the div on screen, use react ref, bottom of component, Css class with position absolute/hidden not hidden, 
        function that makes it popup.
        change class from display none to display absolute. Z index(layering)
      */}

      <Modal show={modal}>
        <Modal.Header className="block-title">Checked In Students</Modal.Header>
        <Modal.Body>
          <div className='basicFlexColumn'>
            {selectedStudents[pages[0]] ? <img className='childPic' src={selectedStudents[pages[0]].imgURL}></img> : ''}
            <p>{selectedStudents[pages[0]] ? `${selectedStudents[pages[0]].firstName}  ${selectedStudents[pages[0]].lastName}`
              : ''}</p>

            {selectedStudents[pages[1]] ? <img className='childPic' src={selectedStudents[pages[1]].imgURL}></img> : ''}
            <p>{selectedStudents[pages[1]] ? `${selectedStudents[pages[1]].firstName}  ${selectedStudents[pages[1]].lastName}`
              : ''}</p>

            {selectedStudents[pages[2]] ? <img className='childPic' src={selectedStudents[pages[2]].imgURL}></img> : ''}
            <p>{selectedStudents[pages[2]] ? `${selectedStudents[pages[2]].firstName}  ${selectedStudents[pages[2]].lastName}`
              : ''}</p>

            {selectedStudents[pages[3]] ? <img className='childPic' src={selectedStudents[pages[3]].imgURL}></img> : ''}
            <p>{selectedStudents[pages[3]] ? `${selectedStudents[pages[3]].firstName}  ${selectedStudents[pages[3]].lastName}`
              : ''}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {pages ?
            pages[0] === 0 ?
              <button className='button'>Prev</button>
              :
              <Button onClick={() => { handlePage('prev') }}>Prev</Button>
            : ''}

          <Button className='btn button-close btn-success' onClick={handleModal}><i class="fa fa-times" aria-hidden="true"></i></Button>

          {pages ?
            selectedStudents[pages[3] + 1] ?
              <Button onClick={() => handlePage('next')}>Next</Button>
              :
              <button className='button-secondary'>Next</button>
            : ''}

        </Modal.Footer>
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
                {/* <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-200px"></th>
                    <th className="p-0 min-w-100px"></th>
                    <th className="p-0 min-w-40px"></th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    {/* <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="">????</span>
                      </div>
                    </th> */}
                    <td id="data-legend" className="ps-0">
                      {/*~~~~~~~~~~~~MODAL~~~~~~~~~~~~~ */}
                      <p className='blankBtn' onClick={() => handleModal(checkedInfants)}>
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          Infants <span className="hyperlink">View list</span>
                        </a>
                      </p>
                      {/*~~~~~~~~~~~~~~~~~~MODAL END~~~~~~~~~~~~~ */}
                      <span className="text-muted fw-bold d-block mt-1">
                        Less than 1 yr olds
                      </span>
                    </td>
                    <td>
                      <div className="">
                        {/* <div id="data-legend" className="">
                          <span className="">
                            Check in Count
                          </span>
                        </div> */}
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{
                                width: `${(checkedInfants.length / infantList.length) *
                                  100
                                  }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="smalltxt">
                            Check in count {`${checkedInfants.length}/${infantList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    {/* <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td> */}
                  </tr>
                  <tr>
                    {/* <td className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-warning"></span>
                      </div>
                    </td> */}
                    <td id="data-legend" className="ps-0">
                      <button className='blankBtn' onClick={() => handleModal(checkedToddlers)}>
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          Toddlers <span className="hyperlink">View list</span>
                        </a>
                      </button>
                      <span className="text-muted fw-bold d-block mt-1">
                        1 - 2 yr olds
                      </span>
                    </td>
                    <td>
                      <div className="">
                        {/* <div id="data-legend" className="">
                          <span className="">
                            Check in Count
                          </span>
                        </div> */}
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{
                                width: `${(checkedToddlers.length /
                                  toddlerList.length) *
                                  100
                                  }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="smalltxt">
                            Check in count {`${checkedToddlers.length}/${toddlerList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    {/* <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td> */}
                  </tr>
                  <tr>
                    {/* <th className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-success "></span>
                      </div>
                    </th> */}
                    <td id="data-legend" className="ps-0">
                      <button className='blankBtn' onClick={() => handleModal(checkedPreschoolers)}>
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          Preschoolers <span className="hyperlink">View list</span>
                        </a>
                      </button>
                      <span className="text-muted fw-bold d-block mt-1">
                        3 to 5 yr olds
                      </span>
                    </td>
                    <td>
                      <div className="">
                        {/* <div id="data-legend" className="">
                          <span className="">
                            Check in Count
                          </span>
                        </div> */}
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width: `${(checkedPreschoolers.length /
                                  preschoolerList.length) *
                                  100
                                  }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="smalltxt">
                            Check in count {`${checkedPreschoolers.length}/${preschoolerList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    {/* <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td> */}
                  </tr>
                  <tr>
                    {/* <th className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-danger"></span>
                      </div>
                    </th> */}
                    <td id="data-legend" className="ps-0">
                      <button className='blankBtn' onClick={() => handleModal(checkedKinders)}>
                        <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                          Kindergarteners <span className="hyperlink">View list</span>
                        </a>
                      </button>
                      <span className="text-muted fw-bold d-block mt-1">
                        5 - 6 yr olds
                      </span>
                    </td>
                    <td>
                      <div className="">
                        {/* <div id="data-legend" className="">
                          <span className="">
                            Check in Count
                          </span>
                        </div> */}
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{
                                width: `${(checkedKinders.length / kinderList.length) *
                                  100
                                  }%`,
                              }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="smalltxt">
                            Check in count {`${checkedKinders.length}/${kinderList.length}`}
                          </span>
                        </div>
                      </div>
                    </td>
                    {/* <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"></a>
                    </td> */}
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
            <Ratios />
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
            <GroupStatus />
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return state
};

export default connect(mapState)(StudentTable);

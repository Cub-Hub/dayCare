import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchChildren } from "../../store";
import Radar from 'radar-sdk-js';
import axios from 'axios'


/**
 * COMPONENT
 */

const OnlineCheckin = (props) => {

  Radar.initialize('prj_test_pk_8780a4d87931b921a94a02b7c5beda44cbc271c1');
  const [childList, setChildList] = useState(() => []);
  const [alert, setAlert] = useState(() => false);
  const [loading, setLoading] = useState(() => false);
  const [singleLoad, setSingleLoad] = useState(() => false);
  const [success, setSuccess] = useState(() => false);
  const [homeSchool, setHomeSchool] = useState(() => false);


  useEffect(() => {
    props.fetchChildren(props.parentId);
  }, []);

  useEffect(() => {
    findSchool()
  }, []);


    const className = "card-stretch mb-5 mb-xxl-8";

    const findSchool = async() => {
      const {data} = await axios.get(
        `/api/parents/school/${props.schoolId}`
        )
      return setHomeSchool(data)
    }

    const checkKidsIn = async(ids) => {
      await axios.post('/api/parents/checkin', ids)
    }

    const handleAll = () => {
      setLoading(true)
      setAlert(false)
      Radar.trackOnce(function (err, result) {
      if (!err) {
        const spot = result.location
        if(spot.latitude < homeSchool.maxLat && spot.latitude > homeSchool.minLat 
          && spot.longitude < homeSchool.maxLon && spot.longitude > homeSchool.minLon){
            const checkedKids = props.myChildren.map((child) => child.id)
            checkKidsIn(checkedKids)
            setChildList(checkedKids)
            setLoading(false)
            setSuccess(true)
          } else {
            setLoading(false)
            setAlert(true)
          }
      } else {
        console.log(err)
        setLoading(false)
        setAlert(true)
      }
    });
    }

    const handleSingle = (id) => {
      setSingleLoad(true)
      setAlert(false)
      Radar.trackOnce(function (err, result) {
      if (!err) {
        const spot = result.location
        if(spot.latitude < homeSchool.maxLat && spot.latitude > homeSchool.minLat 
          && spot.longitude < homeSchool.maxLon && spot.longitude > homeSchool.minLon){
            checkKidsIn([id])
            setChildList([...childList, id])
            setSingleLoad(false)
          } else {
            setSingleLoad(false)
            setAlert(true)
          }
      } else {
        console.log(err)
        setAlert(true)
      }
    });
    }

    console.log('this is school!!!: ', homeSchool)
    
    return (
      <div className={`card ${className}`}>
        {/* begin::Header*/}
        <div className='checkinHeader'>
          {alert? 
          <h3 className='failure'>Checkin failed: must be within 10 meters of daycare</h3>
          :
          success ?
          ''
          :
          <h3>`Must be within 10 meters of daycare to checkin`</h3>
          }
          {loading ? 
          'Checking your child in...'
          :
          success ?
          <button className="btn btn-success">Checkin Successful!</button>
          :
          <button className="btn btn-primary" onClick={handleAll}>Checkin All Children</button>
          }
        </div>

        <div className="card-header align-items-center border-0 mt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="fw-bolder text-dark fs-3">Select Students to Checkin</span>
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

                    {childList ?
                    
                      childList.includes(child.id) ? 
                      <button className="btn btn-success" > {child.firstName} is checked in</button>
                      :
                      singleLoad ?
                      'Checking in your child'
                      :
                      <button className="btn btn-primary" onClick={() => handleSingle(child.id)}>Checkin {child.firstName}</button>
                      
                    :
                    ''
                    }
                    

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
    myChildren: state.children,
    schoolId: state.auth.schoolId
  };
};

const mapDispatch = {
    fetchChildren
};

export default connect(mapState, mapDispatch)(OnlineCheckin);

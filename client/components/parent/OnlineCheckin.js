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

  const findSchool = async () => {
    const { data } = await axios.get(
      `/api/parents/school/${props.schoolId}`
    )
    return setHomeSchool(data)
  }

  const checkKidsIn = async (ids) => {
    await axios.post('/api/parents/checkin', ids)
  }

  const handleAll = () => {
    setLoading(true)
    setAlert(false)
    Radar.trackOnce(function (err, result) {
      if (!err) {
        const spot = result.location
        if (spot.latitude < homeSchool.maxLat && spot.latitude > homeSchool.minLat
          && spot.longitude < homeSchool.maxLon && spot.longitude > homeSchool.minLon) {
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
        if (spot.latitude < homeSchool.maxLat && spot.latitude > homeSchool.minLat
          && spot.longitude < homeSchool.maxLon && spot.longitude > homeSchool.minLon) {
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

  // console.log('this is school!!!: ', homeSchool)

  return (
    <div id="onlineCheckinPage">
      <div className="checkinAll">
        {/* begin::Header*/}
        <div className='checkinHeader'>
          {alert ?
            <p className='failed block-title'><strong>Checkin failed:</strong><br />Must be within 10 meters of daycare</p>
            :
            success ?
              ''
              :
              <p className="block-title">Must be within 10 meters of daycare to checkin</p>
          }
          {loading ?
            'Checking your child in...'
            :
            success ?
              <button style={{backgroundColor:'lightgreen'}} className="button">Checkin Successful!</button>
              :
              <button className="button" onClick={handleAll}>Checkin All Children</button>
          }
        </div>
      </div>
      <div>

        <div id="childrenTable">
          <div>
            <h3 className="block-title">Select Students to Checkin
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
                              {child.isPending === true ? <span className="pendingChildLabel">PENDING<br /></span> : null}
                              {`${child.firstName} ${child.lastName}`}
                            </p>

                            {childList ?

                              childList.includes(child.id) ?
                                <button style={{backgroundColor:'lightgreen'}} className="button" > {child.firstName} is checked in</button>
                                :
                                singleLoad ?
                                  'Checking in your child'
                                  :
                                  <button className="button" onClick={() => handleSingle(child.id)} disabled={child.isPending === true ? true : false} >Checkin {child.firstName}</button>

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
        </div>
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

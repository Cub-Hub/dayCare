
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ParentChildren from "./ChildrenTable";
import { ParentCheckin } from "./CheckinTile";
import { ParentNotifications } from "./NotificationsTile";
import { ParentBill } from "./ParentBill";
import AddChildForm from "./AddChildForm";

/**
 * COMPONENT
 */

export const ParentLanding = (props) => {


  const { username } = props;
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";
  const myChildren = props.state.students.filter(student => student.userId === props.state.auth.id)
  const approvedMyChildren = myChildren.filter(child => child.isPending === false)
  console.log('parent landing props: ', props)

  return (
    <div id="parentLandingPage">
      {
        approvedMyChildren && approvedMyChildren.length > 0 ?
          <div>
            <div className="parentShortcutsWrapper">
              <ParentCheckin />
              <ParentNotifications />
              <ParentBill />
            </div>
            <ParentChildren />
          </div>
          :
          <div className="parentShortcutsWrapper parentShortcutsWrapper-empty">
            <AddChildForm />
          </div>

      }
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    state
  };
};



export default connect(mapState)(ParentLanding);


import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ParentChildren from "./ChildrenTable";
import { ParentCheckin } from "./CheckinTile";
import { ParentNotifications } from "./NotificationsTile";
import { ParentBill } from "./ParentBill";

/**
 * COMPONENT
 */

export const ParentLanding = (props) => {


  const { username } = props;
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";
  //console.log('parent landing props: ', props)

  return (
    <div id="parentLandingPage">
      <div className="parentShortcutsWrapper">
        <ParentCheckin />
        <ParentNotifications />
        <ParentBill />
      </div>
      <ParentChildren />
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

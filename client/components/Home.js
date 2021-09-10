import React from "react";
import { connect } from "react-redux";
import ParentChildren from "./widgets/tables/ParentChildren";
import { ParentCheckin } from "./widgets/tiles/ParentCheckin";
import { ParentNotifications } from "./widgets/tiles/ParentNotifications";
import { ParentBill } from "./widgets/tiles/ParentBill";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { username } = props;
  const className = "card-stretch mb-5 mb-xxl-8";
  const innerPadding = "";

  return (
    <div className="row g-0 g-xl-5 g-xxl-8">
      <ParentCheckin />
      <ParentNotifications />
      <ParentBill />
      <ParentChildren />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);

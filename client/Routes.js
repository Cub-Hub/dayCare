import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';


import CalendarBig from './components/CalendarBig';


import Calendar from './components/Calendar';


import { me, fetchDailyCheckin, getStudents, getUsers, fetchGroups } from './store'

// import { QrGenerator } from './components/QrGenerator';
import Home from './components/Home'
import AdminDashboard from './components/admin/AdminDashboard'
import ParentLanding from './components/parent/ParentLanding';
import OnlineCheckin from './components/parent/OnlineCheckin';
import EmployeeLanding from './components/employee/EmployeeLanding';
import MailchimpFormContainer from './components/MailChimpFormContainer';
import StudentsActivityMonitor from './components/employee/StudentsActivityMonitor'
import GroupStatus from './components/employee/GroupStatus';
import AllStudents from './components/admin/AllStudents';
import SingleStudent from './components/admin/SingleStudent';
import StripeSuccess from './components/parent/StripeSuccess';
import StripeCanceled from './components/parent/StripeCanceled';
import StripeSubscriptionSuccess from './components/parent/StripeSubscriptionSuccess'
import TermsOfService from './components/parent/TermsOfService';
import PrivacyPolicy from './components/parent/PrivacyPolicy';
import Invoices from './components/parent/Invoices'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn, userType } = this.props

    return (
      <div>
        {isLoggedIn ? (
          // parent
          userType === 3 ?
            <Switch>
              <Route path="/home" component={ParentLanding} />
              <Route path="/calendar" component={CalendarBig} />
              {/* <Route path="/qrgenerator" component={QrGenerator} /> */}
              <Route path="/admin-dashboard" component={AdminDashboard} />
              <Route path="/employee-landing" component={EmployeeLanding} />
              <Route path="/onlineCheckin" component={OnlineCheckin} />
              <Route path="/students-activity-monitor" component={StudentsActivityMonitor} />
              <Route path='/invoices' component={Invoices} />
              <Route path='/checkout/success' component={StripeSuccess} />
              <Route path='/checkout/canceled' component={StripeCanceled} />
              <Route path='/checkout/subscriptionsuccess' component={StripeSubscriptionSuccess} />
              <Route path='/checkout/subscriptioncanceled' component={StripeCanceled} />
              <Route path='/termsofservice' component={TermsOfService} />
              <Route path='/privacypolicy' component={PrivacyPolicy} />
              <Redirect to="/home" />
            </Switch>
            :
            // admin
            userType === 2 ?
              <Switch>
                <Route path="/home" component={AdminDashboard} />
                <Route path="/calendar" component={CalendarBig} />
                {/* <Route path="/qrgenerator" component={QrGenerator} /> */}
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/employee-landing" component={EmployeeLanding} />
                <Route path="/onlineCheckin" component={OnlineCheckin} />
                <Route path="/students" component={AllStudents} />
                <Route path="/student/:id" component={SingleStudent} />
                <Route path="/students-activity-monitor" component={StudentsActivityMonitor} />
                <Redirect to="/home" />
              </Switch>
              :
              //employee
              <Switch>
                <Route path="/home" component={EmployeeLanding} />

                <Route path="/calendar" component={CalendarBig} />

                <Route path="/status" component={GroupStatus} />

                {/* <Route path="/qrgenerator" component={QrGenerator} /> */}
                {/* <Route path="/admin-dashboard" component={AdminDashboard} /> */}
                <Route path="/students-activity-monitor" component={StudentsActivityMonitor} />
                <Redirect to="/home" />
              </Switch>
        ) : (
            // not logedin
            <Switch>
              {/*<Route path='/' exact component={Login} />*/}
              <Route path='/' exact component={Home} />
              <Route path="/newsletter" component={MailchimpFormContainer} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined as having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    userType: state.auth.typeId
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchDailyCheckin())
      dispatch(getStudents())
      dispatch(getUsers())
      dispatch(fetchGroups())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

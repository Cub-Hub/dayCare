import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import EmployeeLanding from './components/employee/EmployeeLanding';
import Invoices from './components/parent/Invoices';

import Calendar from './components/Calendar';
import {me} from './store'
import ParentLanding from './components/parent/ParentLanding';
import OnlineCheckin from './components/parent/OnlineCheckin';
import StripeSuccess from './components/parent/StripeSuccess';
import StripeCanceled from './components/parent/StripeCanceled';

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

          userType < 3 ?
            <Switch>
              <Route path="/home" component={EmployeeLanding} />
              <Route path="/calendar" component={Calendar} />
              <Redirect to="/home" />
            </Switch>
            :
            <Switch>
              <Route path="/home" component={ParentLanding} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/onlineCheckin" component={OnlineCheckin} />
              <Route path='/invoices' component={ Invoices } />
              <Route path='/checkout/success' component={ StripeSuccess } />
              <Route path='/checkout/canceled' component={ StripeCanceled } />
              <Redirect to="/home" />
            </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={Login} />
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
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

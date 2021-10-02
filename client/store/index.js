import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'
import children from './parent/children'
import users from './users'
import students from './students'
import schools from './schools'
import checkins from './admin/checkins'
import clockin from './employee/clockin'
import groups from './admin/groups'
import stripe from './stripe'
import employeeClockins from './admin/employeeClockins'

const reducer = combineReducers({
  auth,
  users,
  students,
  schools,
  children,
  checkins,
  clockin,
  groups,
  stripe,
  employeeClockins
})


const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './admin/checkins'
export * from './admin/groups'
export * from './students'
export * from './schools'
export * from './users'
export * from './parent/children'
export * from './employee/clockin'
export * from './admin/employeeClockins'


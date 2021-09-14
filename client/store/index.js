import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'
import children from './parent/children'
import users from './users'
import students from './students'
import checkins from './admin/checkins'

const reducer = combineReducers({
  auth,
  users,
  students,
  children,
  checkins
})


const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './admin/checkins'
export * from './students'
export * from './users'
export * from './parent/children'


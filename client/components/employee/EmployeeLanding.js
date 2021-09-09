import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const AdminLanding = props => {
  const {username} = props

  console.log(props)

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <h3>You are an employee</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(AdminLanding)
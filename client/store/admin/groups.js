import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_GROUPS = 'SET_GROUPS'

/**
 * ACTION CREATORS
 */
const setGroups = groups => ({ type: SET_GROUPS, groups })

/**
 * THUNK CREATORS
 */
export const fetchGroups = () => async dispatch => {

    const {data} = await axios.get(`/api/admin/groups`)

  return dispatch(setGroups(data))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_GROUPS:
      return action.groups
    default:
      return state
  }
}
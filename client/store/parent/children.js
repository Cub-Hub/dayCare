import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_CHILDREN = 'SET_CHILDREN'

/**
 * ACTION CREATORS
 */
const setChildren = children => ({type: SET_CHILDREN, children})

/**
 * THUNK CREATORS
 */
export const fetchChildren = (parentId) => async dispatch => {
    const res = await axios.get(`/api/parents/children/${parentId}`)
    return dispatch(setChildren(res.data))
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case SET_CHILDREN:
      return action.children
    default:
      return state
  }
}

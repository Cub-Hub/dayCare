import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_ACTIVITIES = 'SET_ACTIVITIES'
const POST_ACTIVITIES = 'POST_ACTIVITIES'

/**
 * ACTION CREATORS
 */
const setActivities = activities => ({ type: SET_ACTIVITIES, activities })
const addActivities = activities => ({ type: POST_ACTIVITIES, activities })

/**
 * THUNK CREATORS
 */
export const fetchActivities = () => async dispatch => {

    const {data} = await axios.get(`/api/employees/activities`)
    const dateObj = new Date()
    const todayStr = dateObj.toDateString()

  let curActivities = data.filter((activity) => {
    return  activity.date === todayStr
  })

  return dispatch(setActivities(curActivities))
}

export const postActivities = (activity, studentId, groupId, note) => async dispatch => {
    const {data} = await axios.post('/api/employees/activities', {
        activity, studentId, groupId, note
    })

    console.log('this is where the action at: ', data)

    return dispatch(addActivities(data))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.activities
    case POST_ACTIVITIES:
      return [...state, action.activities]
    default:
      return state
  }
}
import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_CHECKINS = 'SET_CHECKINS'

/**
 * ACTION CREATORS
 */
const setCheckins = checkins => ({ type: SET_CHECKINS, checkins })

/**
 * THUNK CREATORS
 */
export const fetchDailyCheckin = () => async dispatch => {

  const { data } = await axios.get(`/api/students/checkins`)
  const dateObj = new Date()
  const todayStr = dateObj.toDateString()

  // console.log('this is checkin store data~~ ', data)


  const checkins = data.filter((checkin) => {
    return checkin.date === todayStr
  })

  return dispatch(setCheckins(checkins))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_CHECKINS:
      return action.checkins
    default:
      return state
  }
}
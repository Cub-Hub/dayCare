import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_CLOCKINS = 'SET_CLOCKINS'

/**
 * ACTION CREATORS
 */
const setClockins = clockins => ({ type: SET_CLOCKINS, clockins })

/**
 * THUNK CREATORS
 */
export const fetchClockins = () => async dispatch => {


    const {data} = await axios.get(`/api/admin/clockins`)
    const dateObj = new Date()
    const todayStr = dateObj.toDateString()

  let clockins = data.filter((clockin) => {
    return  clockin.date === todayStr
  })

  return dispatch(setClockins(clockins))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_CLOCKINS:
      return action.clockins
    default:
      return state
  }
}
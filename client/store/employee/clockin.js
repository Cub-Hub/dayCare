import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_CLOCKIN = 'SET_CLOCKIN'

/**
 * ACTION CREATORS
 */
const setClockin = clockin => ({ type: SET_CLOCKIN, clockin })

/**
 * THUNK CREATORS
 */
export const fetchClockinStatus = (id) => async dispatch => {


    const {data} = await axios.get(`/api/employees/clockins`)
    const dateObj = new Date()
    const todayStr = dateObj.toDateString()

    console.log('the clockin data from store ~~~~', data)

  let clockin = data.filter((clockin) => {
    return  clockin.userId === id && clockin.date === todayStr
  })

  if(!clockin[0]) clockin = false

  return dispatch(setClockin(clockin))
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_CLOCKIN:
      return action.clockin
    default:
      return state
  }
}
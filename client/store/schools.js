import axios from 'axios';

//ACTION TYPES

const GET_SCHOOLS = 'GET_SCHOOLS';

//ACTION CREATORS

const _getSchools = (schools) => {
  return {
    type: GET_SCHOOLS,
    schools
  };
};


//THUNK CREATORS

export const getSchools = () => {
  return async (dispatch) => {
    const { data: schools } = await axios.get('/api/schools');
    dispatch(_getSchools(schools));
  };
};

//REDUCER

export default function (state = [], action) {
  switch (action.type) {
    case GET_SCHOOLS:
      return action.schools;
    default:
      return state
  };
};
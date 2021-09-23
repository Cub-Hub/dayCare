import axios from 'axios';

// import history from '../history';
/* 
not sure if we need to import this -- didn't think we needed it but
the auth store file imports it so I'm dropping it here for now 
*/


//ACTION TYPES
const GET_USERS = 'GET_USERS';


//ACTION CREATORS
const _getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  };
};



//THUNK CREATORS
export const getUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get('/api/users');
    dispatch(_getUsers(users));
    /*history.push('/users') Wherever we want to redirect!*/
  };
};


//REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state
  };
};
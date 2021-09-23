import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';

//ACTION CREATORS

const _getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};


//THUNK CREATORS

export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get('/api/students');
    dispatch(_getStudents(students));
  };
};

//REDUCER

export default function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state
  };
};
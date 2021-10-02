import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

//ACTION CREATORS

const _getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student
  }
}


//THUNK CREATORS

export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get('/api/students');
    dispatch(_getStudents(students));
  };
};
export const createStudent = (newStudent) => {
  return async (dispatch) => {
    const { data: student } = await axios.post('/api/students/create', { newStudent });
    dispatch(_createStudent(student))
  }
}
export const updateStudent = (updatedStudent) => {
  console.log('STORE UPDATE FUNCTION student => ', updatedStudent)
  const id = updatedStudent.id;
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/students/${id}`, updatedStudent);
  }
}

//REDUCER

export default function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    default:
      return state
  };
};

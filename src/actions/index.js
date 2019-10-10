import types from './types';
import axios from 'axios';

/* post */
export const addGradeData = (gradeData) => async dispatch => {
  const resp = await axios.post(`/api/grades`, gradeData);

  dispatch({
    type: types.ADD_GRADE_DATA,
    data: resp.data
  })
}

/* get */
export const getGradeData = () => async dispatch => {
  const resp = await axios.get(`/api/grades`);

  dispatch({
    type: types.GET_GRADES_DATA,
    grades: resp.data
  })
}

/* es 5 */
// export function getGradeData() {
//   return async function (dispatch) {
//     // do the things
//   }
// }

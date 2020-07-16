import { ERROR, ADD_USER, FETCH_USERS } from './types';
import { setAlert } from './alert';
import axios from 'axios';

export const addUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('api/user/', formData, config);
    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: ERROR,
    });
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('api/user/');

    dispatch({
      type: FETCH_USERS,
      payload: res.data.users,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: {
        mgs: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

import {
  ERROR,
  ADD_USER,
  FETCH_USERS,
  SELECTED_USER,
  LOGIN_USER,
  DELETE_USER,
  EDIT_USER,
  CHAT_WINDOW,
} from './types';
import { setAlert } from './alert';
import history from '../history';
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
    });

    history.push('/');
    dispatch(setAlert('Contact Added', 'green'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'red')));
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

export const selectedUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_USER,
      payload: user,
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

export const chatWindowOpen = (user) => async (dispatch) => {
  try {
    dispatch({
      type: CHAT_WINDOW,
      payload: user,
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

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER,
      payload: user,
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

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/user/${id}`);

    dispatch({
      type: DELETE_USER,
      payload: id,
    });
    history.push('/');
    dispatch(setAlert('Contact Deleted', 'red'));
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

export const editUser = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`api/user/${id}`, formData, config);

    dispatch({
      type: EDIT_USER,
      payload: res.data.user,
    });
    history.push('/');
    dispatch(setAlert('Contact Edited', 'red'));
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

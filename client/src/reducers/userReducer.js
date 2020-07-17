import {
  FETCH_USERS,
  ADD_USER,
  ERROR,
  SELECTED_USER,
  LOGIN_USER,
  EDIT_USER,
  DELETE_USER,
} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  loading: true,
  error: {},
  isSelected: false,
  loggedUser: {},
  isAuth: false,
};

export default function (state = { initialState }, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_USER:
    case EDIT_USER:
      return {
        ...state,
        loading: false,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case SELECTED_USER:
      return {
        ...state,
        user: payload,
        loading: false,
        isSelected: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedUser: payload,
        loading: false,
        isAuth: true,
      };
    case DELETE_USER:
      return {
        ...state,
        loggedUser: null,
        loading: false,
        isAuth: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        users: null,
        error: payload,
      };
    default:
      return state;
  }
}

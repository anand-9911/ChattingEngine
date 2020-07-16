import { FETCH_USERS, ADD_USER, ERROR } from '../actions/types';

const initialState = {
  users: [],
  loading: true,
  error: {},
};

export default function (state = { initialState }, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_USER:
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

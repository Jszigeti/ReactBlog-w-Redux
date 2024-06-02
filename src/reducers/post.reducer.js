import { ADD_POST, GET_POSTS } from "../actions/posts.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}

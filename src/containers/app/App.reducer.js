import * as types from './App.types';

export default (state = 'Defatul Text', action) => {
  switch (action.type) {
    case types.GET_TEXT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

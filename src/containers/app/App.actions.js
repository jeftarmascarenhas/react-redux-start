import * as types from './App.types'

export const getText = () => ({
  type: types.GET_TEXT_SUCCESS,
  payload: 'React and Redux',
})
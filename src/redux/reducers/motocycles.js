
import { SET_MOTOCYCLES, FETCH_ERROR } from '../actions/types'

const initialState = {
  data: [],
  error: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_MOTOCYCLES:
      return {
        ...state,
        data: action.motocycles
      }

    case FETCH_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}
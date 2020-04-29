
import { SET_MOTOCYCLES } from '../actions/types'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_MOTOCYCLES:
      return {
        ...state,
        data: action.motocycles
      }

    default:
      return state
  }
}

import { SET_MOTOCYCLES, FETCH_STATUS_ERROR, FETCH_STATUS_PENDING } from '../actions/types'

const initialState = {
  data: [],
  error: null,
  loading: false
}

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_MOTOCYCLES:
      return {
        ...state,
        data: action.motocycles
      }

    case FETCH_STATUS_ERROR:
      return {
        ...state,
        error: action.error
      }

    case FETCH_STATUS_PENDING:
      return {
        ...state,
        loading: !state.loading
      }

    default:
      return state
  }
}
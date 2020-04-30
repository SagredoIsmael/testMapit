
import {
  SET_MOTOCYCLES, FETCH_STATUS_ERROR, FETCH_STATUS_PENDING,
  SET_MOTOCYCLE_SELECTED, FETCH_STATUS_SUCCESS
} from '../actions/types'

const initialState = {
  data: [],
  error: null,
  isLoading: false,
  selected: null
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
        loading: true
      }

    case FETCH_STATUS_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case SET_MOTOCYCLE_SELECTED:
      return {
        ...state,
        selected: action.motocycle
      }

    default:
      return state
  }
}
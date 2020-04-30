import { SET_MOTOCYCLES, FETCH_STATUS_ERROR, FETCH_STATUS_PENDING, SET_MOTOCYCLE_SELECTED, FETCH_STATUS_SUCCESS } from './types'
import api from '../../utils/API'

const setMotocycles = motocycles => ({
  type: SET_MOTOCYCLES,
  motocycles
})

const setError = error => ({
  type: FETCH_STATUS_ERROR,
  error
})

const isLoading = () => ({
  type: FETCH_STATUS_PENDING
})

const setSuccess = () => ({
  type: FETCH_STATUS_SUCCESS
})

export const setSelected = motocycle => ({
  type: SET_MOTOCYCLE_SELECTED,
  motocycle
})

export const fetchMotocycles = () => dispatch => {
  dispatch(isLoading())
  //setTimeout(() => {dispatch(setMotocycles(fakeResult))}, 5000)
  fetch(api.url)
    .then(response => response.json())
    .then(data => {
      dispatch(setMotocycles(data))
      dispatch(setSuccess())
    })
    .catch(error => dispatch(setError(error)))
}

const fakeResult = [
  {
    "id": "MOTO_A",
    "fechaCompra": "2016-10-05",
    "precioCompra": 12000,
    "modelo": "AVR123",
    "nombre": "Favorita",
    "coordenadas": {
      "latitud": 41.7933321,
      "longitud": 2.3943012
    }
  },
  {
    "id": "MOTO_B",
    "fechaCompra": "2011-12-31",
    "precioCompra": 16715,
    "modelo": "ADV750",
    "nombre": "Cacharra",
    "coordenadas": {
      "latitud": 42.3964434,
      "longitud": 2.1521065
    }
  }
]
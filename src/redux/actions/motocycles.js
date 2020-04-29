import { SET_MOTOCYCLES, FETCH_STATUS_ERROR, FETCH_STATUS_PENDING  } from './types'
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

export const fetchMotocycles = () => dispatch => {
    dispatch(isLoading())
    setTimeout(() => {dispatch(setMotocycles(fakeResult))}, 5000)
    // fetch(api.url)
    //     .then(json => {
    //         dispatch(setMotocycles(json))
    //         dispatch(isLoading())
    //     })
    //     .catch(error => dispatch(setError(error)))
}

const fakeResult = [
    {
        "name": "John",
        "age": 30,
        "cars": ["Ford", "BMW", "Fiat"]
    },
    {
        "name": "Isma",
        "age": 31,
        "cars": ["Honda", "Yamaha"]
    },
]
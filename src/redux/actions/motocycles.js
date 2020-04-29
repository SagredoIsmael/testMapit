import { SET_MOTOCYCLES, FETCH_ERROR } from './types'
import api from '../../utils/API'

const setMotocycles = motocycles => ({
    type: SET_MOTOCYCLES,
    motocycles
})

const setError = error => ({
    type: FETCH_ERROR,
    error
})

export const fetchMotocycles = () => dispatch => {
    dispatch(setMotocycles(fakeResult))
    // fetch(api.url)
    //     .then(json => {
    //         dispatch(setMotocycles(json))
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
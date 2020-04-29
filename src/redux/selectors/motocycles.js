import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getMotocycles = get('motocycles')

export const getDataMotocycles = pipe(
    getMotocycles,
    get('data')
)

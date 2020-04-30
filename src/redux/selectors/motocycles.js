import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'
import moment from "moment"

const getMotocycles = get('motocycles')

export const getDataMotocycles = pipe(
    getMotocycles,
    get('data')
)

export const isLoadingMotocycles = pipe(
    getMotocycles,
    get('isLoading')
)

export const getErrorMotocycles = pipe(
    getMotocycles,
    get('error')
)

export const getSelectedMotocycle = pipe(
    getMotocycles,
    get('selected')
)

export const getCurrentPriceSelectedMotocycle = (state) => {
    const motocycle = getSelectedMotocycle(state)
    const purchaseDate = moment(motocycle.fechaCompra, 'YYYY-MM-DD')
    const currentDate = moment()
    const durationDates = moment.duration(currentDate.diff(purchaseDate))
    const durationYears = Math.trunc(durationDates.asYears())
    return Math.trunc(motocycle.precioCompra / Math.pow(2, durationYears))
}
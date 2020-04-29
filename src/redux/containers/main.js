import { connect } from "react-redux"
import { compose } from 'redux'
import { connectNavigation } from '@sagredoismael/navigation_rn'
import Main from '../../screens/Main'
import { fetchMotocycles, setSelected } from '../actions/motocycles'
import { getDataMotocycles, isLoadingMotocycles, getErrorMotocycles } from '../selectors/motocycles'

const mapStateToProps = state => (
    {
        motocycles: getDataMotocycles(state),
        isLoading: isLoadingMotocycles(state),
        error: getErrorMotocycles(state)
    }
)

const mapDispatchToProps ={ 
    fetchMotocycles,
    setSelected
}

export default compose(
    connectNavigation,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Main)
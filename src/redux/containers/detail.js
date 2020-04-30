import { connect } from "react-redux"
import { compose } from 'redux'
import { connectNavigation } from '@sagredoismael/navigation_rn'
import Detail from '../../screens/Detail'
import { getSelectedMotocycle, getCurrentPriceSelectedMotocycle } from '../selectors/motocycles'


const mapStateToProps = state => (
    {
        motocycle: getSelectedMotocycle(state),
        price: getCurrentPriceSelectedMotocycle(state)
    }
)

export default compose(
    connectNavigation,
    connect(
        mapStateToProps
    )
)(Detail)
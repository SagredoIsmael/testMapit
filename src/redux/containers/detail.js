import { connect } from "react-redux"
import { compose } from 'redux'
import { connectNavigation } from '@sagredoismael/navigation_rn'
import Detail from '../../screens/Detail'
import { getSelectedMotocycles } from '../selectors/motocycles'


const mapStateToProps = state => (
    {
        motocycle: getSelectedMotocycles(state)
    }
)

export default compose(
    connectNavigation,
    connect(
        mapStateToProps
    )
)(Detail)
import { connect } from "react-redux"
import { compose } from 'redux'
import { connectNavigation } from '@sagredoismael/navigation_rn'
import Main from '../../screens/Main'


const mapStateToProps = state => (
    {
        
    }
)

const mapDispatchToProps ={ }

export default compose(
    connectNavigation,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Main)
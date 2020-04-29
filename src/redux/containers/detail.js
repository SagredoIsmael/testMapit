import { connect } from "react-redux"
import { compose } from 'redux'
import { connectNavigation } from '@sagredoismael/navigation_rn'
import Detail from '../../screens/Detail'


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
)(Detail)
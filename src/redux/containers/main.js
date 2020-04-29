import { connect } from "react-redux"
import { compose } from 'redux'
import { connectNavigation } from '@sagredoismael/navigation_rn'
import Main from '../../screens/Main'
import { fetchMotocycles } from '../actions/motocycles'


const mapStateToProps = state => (
    {
        
    }
)

const mapDispatchToProps ={ 
    fetchMotocycles
}

export default compose(
    connectNavigation,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Main)
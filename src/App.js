import React from 'react'
import Navigator from './screens/Navigator'
import { ReduxWrapper } from '@sagredoismael/redux_rn'
import reducers from './redux/reducers'

export default () =>
    <ReduxWrapper
        App={Navigator}
        reducers={reducers} />

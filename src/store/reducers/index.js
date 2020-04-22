import { combineReducers } from 'redux'
import common from './common'
import finances from './finances'
export default combineReducers({
    common,
    finances
})
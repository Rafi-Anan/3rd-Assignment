import reducer from './filter/reducer';
import { combineReducers} from "redux"

const rootReducer = combineReducers({ filters: reducer})

export default rootReducer;
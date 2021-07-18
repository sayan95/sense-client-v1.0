// import all dependencies
import {combineReducers} from 'redux';
import senseBackdropNavReducer from './ui-store/sense-main-header-store/reducers/sense-backdrop-nav-reducers';

const rootReducer = combineReducers({
    senseBackdropNav : senseBackdropNavReducer
});

export default rootReducer;
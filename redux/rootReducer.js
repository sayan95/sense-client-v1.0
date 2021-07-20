// import all dependencies
import {combineReducers} from 'redux';
import senseBackdropNavReducer from './ui-store/sense-main-header-store/reducers/sense-backdrop-nav-reducers';
import senseMainHeaderBackground from './ui-store/sense-main-header-store/reducers/sense-main-header-background-reducers';

const rootReducer = combineReducers({
    // sensemain main header reducers
    senseBackdropNav : senseBackdropNavReducer,
    senseMainHeaderBackground: senseMainHeaderBackground
});

export default rootReducer;
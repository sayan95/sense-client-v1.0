/**
 *  --------------------------------- 
 *  Reducers for sesne backdrop nav
 *  dispathes action creators
 *  ---------------------------------
 */

import { HYDRATE } from 'next-redux-wrapper';
import {senseBackdropNavStates} from '../states/sense-backdrop-nav-states';
import {SET_BACKDROP_NAV} from '../types/sense-backdrop-nav-types';

const senseBackdropNavReducer = (state = senseBackdropNavStates, action) => {
    switch(action.type){
        case HYDRATE:
            return {...state, ...action.payload.senseBackdropNavReducer}
        case SET_BACKDROP_NAV:
            return {...state, isOpen: action.payload}
        default:
            return state;
    }
}

export default senseBackdropNavReducer;
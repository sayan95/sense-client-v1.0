/**
 *  --------------------------------- 
 *  Reducers for sesne backdrop nav
 *  dispathes action creators
 *  ---------------------------------
 */

import { HYDRATE } from 'next-redux-wrapper';
import {SET_BACKGROUND_CONTENT, SET_BACKGROUND_IMAGE} from '../types/sense-main-header-background-types';
import {senseMainHeaderBackgroundState} from '../states/sense-main-header-background-states';

const senseMainHeaderBackgroundReducer = (state=senseMainHeaderBackgroundState, action) => {
    switch(action.type){
        case HYDRATE:
            return {...state, ...action.payload.senseMainHeaderBackgroundReducer}
        case SET_BACKGROUND_CONTENT:
            return {...state, backgroundContent: action.payload}
        case SET_BACKGROUND_IMAGE:
            return {...state, backgroundImage: action.payload}
        default:
            return state;
    }
}

export default senseMainHeaderBackgroundReducer;
/**
 * ----------------------------------------
 *  Sense backdrop nav menu action creators
 *  ----------------------------------------
 */

import {SET_BACKDROP_NAV} from '../types/sense-backdrop-nav-types';


export const setBackdropNav = isOpen => {
    return { type: SET_BACKDROP_NAV, payload: isOpen}
}   
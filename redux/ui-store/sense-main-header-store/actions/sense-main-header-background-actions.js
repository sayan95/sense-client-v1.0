/**
 * ---------------------------------------------
 *  Sense main header background action creators
 *  --------------------------------------------
 */

 import {SET_BACKGROUND_CONTENT, SET_BACKGROUND_IMAGE} from '../types/sense-main-header-background-types';


 export const setBackgroundContent = content => {
     return { type: SET_BACKGROUND_CONTENT, payload: content}
 }   

 export const setBackgroundImage = image => {
     return {type: SET_BACKGROUND_IMAGE, payload: image}
 }
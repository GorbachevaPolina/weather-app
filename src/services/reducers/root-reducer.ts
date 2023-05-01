import { combineReducers } from 'redux'
import { coordsReducer } from './coords'

export const rootReducer = combineReducers({
    coords: coordsReducer
})
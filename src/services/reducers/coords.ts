import { SET_CITY, SET_USER_LOCATION, TCoordsActions } from "../actions/coords"
import { TCoordsState } from "../types/coords"

const initialState: TCoordsState = {
    city: "Moscow",
    latitude: 55.75222,
    longitude: 37.61556
}

export const coordsReducer = (state = initialState, action: TCoordsActions): TCoordsState => {
    switch(action.type) {
        case SET_CITY: {
            return {
                city: action.city,
                latitude: action.latitude,
                longitude: action.longitude
            }
        }
        case SET_USER_LOCATION: {
            return {
                city: "Your location",
                latitude: action.latitude,
                longitude: action.longitude
            }
        }
        default: {
            return state
        }
    }
}
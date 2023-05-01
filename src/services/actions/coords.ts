export const SET_CITY: "SET_CITY" = "SET_CITY";
export const SET_USER_LOCATION: "SET_USER_LOCATION" = "SET_USER_LOCATION"

export interface ISetCity {
    readonly type: typeof SET_CITY;
    readonly city: string;
    readonly latitude: number;
    readonly longitude: number;
}

export interface ISetUserLocation {
    readonly type: typeof SET_USER_LOCATION;
    readonly latitude: number;
    readonly longitude: number;
}

export type TCoordsActions = ISetCity | ISetUserLocation;
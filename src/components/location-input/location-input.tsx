import React from 'react'
import Select from 'react-select'
import { cities } from '../../services/utils/cities'
import { useDispatch, useSelector } from '../../services/types/store'
import './location-input.scss'
import { SET_CITY, SET_USER_LOCATION } from '../../services/actions/coords'

const LocationInput = () => {
    const dispatch = useDispatch();
    const { city } = useSelector((store) => store.coords)

    const onCityChange = (e: any) => {
        dispatch({
            type: SET_CITY,
            city: e.value,
            latitude: e.latitude,
            longitude: e.longitude
        })
    }

    const setUserLocation = (position: GeolocationPosition) => {
        dispatch({
            type: SET_USER_LOCATION,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setUserLocation);
        }
    }

    return (
        <div className='city-input-container'>
            <Select 
                value={null}
                options={cities} 
                className='select'
                placeholder={city}
                onChange={e => onCityChange(e)}
            />
            <p>
                <span>Didn't find your city?</span>
                <span className='geolocation-on' onClick={getUserLocation}>Click here to share your geolocation</span>
            </p>
        </div>
    )
}

export default LocationInput;
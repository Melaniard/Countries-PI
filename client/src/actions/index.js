import axios from 'axios'

export function getAllCountries() {
  return async (dispatch) => {
    const countries = await axios.get('http://localhost:3001/countries')
   // console.log("1- QUE ME TRAE MI BASE DE DATOS: ", countries); 
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: countries.data,
    })
  }
}

export function getCountriesByName(name) {
  // console.log("2- NAME EN SEARCH: ", name);
  return async (dispatch) => {
    try {
      const countriesByName = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      )
      return dispatch({
        type: 'GET_COUNTRIES_BY_NAME',
        payload: countriesByName.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getCountryDetails(id) {
  return async (dispatch) => {
    try {
      const details = await axios.get(`http://localhost:3001/countries/${id}`)
      // console.log("3- DETAILS.DATA details: ", details.data)
      return dispatch({
        type: 'GET_COUNTRY_DETAILS',
        payload: details.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByContinent(payload) {
  // console.log("4- PAILOD EN ACTION FilterByContinent: ", payload);
  return {
    type: 'FILTER_BY_CONTINENT',
    payload, // [America, Asia]
  }
}

export function filterByActivity(payload) {
  // console.log("5- PAILOAD EN ACTION FilterbyActivities: ", payload);
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload,
  }
}

export function filterByActivityName(payload) {
  return {
    type: 'FILTER_BY_ACTIVITY_NAME',
    payload,
  }
}

export function sort(payload) {
  // console.log("6- SOY PAILOAD EN ACTION SORT: ", payload);
  return {
    type: 'SORT',
    payload,
  }
}

export function createActivity(details) {
  return async function (dispatch) {
    const newActivity = await axios.post(
      'http://localhost:3001/activities',
      details
    )
    //console.log(newActivity)
    return newActivity
  }
}
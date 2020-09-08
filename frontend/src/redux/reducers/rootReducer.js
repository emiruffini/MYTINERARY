import citiesReducer from './citiesReducer'
import usersReducer from './usersReducer'
const {combineReducers} = require('redux')



const rootReducer = combineReducers({
    cities: citiesReducer,
    users: usersReducer
})


export default rootReducer



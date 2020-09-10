import axios from 'axios'

const citiesActions = {
    getInfo: () => {
        return async (dispatch, getState) =>{
            const response = await axios.get('http://127.0.0.1:4000/api/cities')
            const info = response.data

            dispatch({
                type: 'GETINFO',
                payload: info
            })
            
        }
    },
    getItineraries:(idABuscar) =>{
        return async (dispatch, getState) =>{
            const res = await axios.get(`http://127.0.0.1:4000/api/itineraries/${idABuscar}`)
            console.log(res)
            
            
                dispatch({
                    type:'GET_ITINERARIES',
                })
                return(res.data)
            
        }
    },
    getActivities:(id) =>{
        return async (dispatch, getState) =>{
            const res = await axios.get(`http://127.0.0.1:4000/api/activities/${id}`)
            dispatch({
                type:'GET_ACTIVITIES',
            })
            return(res.data.response)
        }
        
    }
}

export default citiesActions
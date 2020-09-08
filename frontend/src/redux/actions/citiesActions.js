import axios from 'axios'

const citiesActions = {
    getInfo: () => {
        return async (dispatch, getState) =>{
            const response = await axios.get('http://127.0.0.1:4000/api/cities')
            const info = response.data
            console.log(info)
            dispatch({
                type: 'GETINFO',
                payload: info
            })
            
        }
    }
}

export default citiesActions
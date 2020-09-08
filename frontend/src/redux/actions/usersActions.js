
import axios from "axios"



const usersActions = {
    createAccount : newUser =>{
        return async (dispatch, getState) => {         
            const res = await axios.post('http://localhost:4000/api/users', newUser)
            const error ={
                mail:"",
                user:""
            }
            if(!res.data.success && res.data.response !== undefined){
                if(res.data.response.errors.mail !== undefined){
                  error.mail = "That email is already used"
                }
                if(res.data.response.errors.user !== undefined){
                   error.user = "That username is already used"
                }
                return error
               
            }else{
                dispatch({
                    type: "LOG_USER_INTO_APP",
                    payload:res.data.response
                })
                return (true)
            }
        }

    },
    logUser : user =>{
        return async ( dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/login", user)
            if (!res.data.success){
                return (res.data.response)    
            }else{
                dispatch({
                    type: "LOG_USER_INTO_APP",
                    payload:res.data.response
                })
                return (true)
            }
        }
    },
    unlogUser : () => {
        return (dispatch, getState) =>{
            dispatch({
                type: "UNLOG_USER_FROM_APP"
            })
        }
    }
}

export default usersActions
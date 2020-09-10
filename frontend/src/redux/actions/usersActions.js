
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
                return {
                    success: true,
                    user: res.data.response.name
                }
            }
        }

    },
    logUser : user =>{
        return async ( dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/login", user)
            console.log(res)
            if (!res.data.success){
                return (res.data.response)    
            }else{
                
                dispatch({
                    type: "LOG_USER_INTO_APP",
                    payload:res.data.response
                })
                return {
                    success: true,
                    user: res.data.response.name
                }
            }
        }
    },
    unlogUser : () => {
        return (dispatch, getState) =>{
            dispatch({
                type: "UNLOG_USER_FROM_APP"
            })
        }
    },
    forcedLogin: token =>{
        return async(dispatch, getState) =>{
            const res = await axios.get("http://localhost:4000/api/validateToken", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(res.data.success){
            dispatch({
                type: "LOG_USER_INTO_APP",
                payload:{
                    token,
                    name: res.data.response.name,
                    photo: res.data.response.photo
                    
                    
                }
            })}
        }
    },
    likeItinerary: (id, token) =>{
        return async (dispatch, getState ) => {
            
            const itineraryId = id
            const res = await axios.put('http://localhost:4000/api/itineraries/'+itineraryId,{},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch({
                type: "LIKE_ITINERARY"
            })

            return (res.data.response)
        }
    },
    getLikes: (token) => {
        return async (dispatch, getState) =>{
            const res = await axios.get("http://localhost:4000/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({
                type: "GET_LIKES"
            })
            return(res.data.response)
        }
    },
    getComments: (idItinerary) =>{
        return async (dispatch, getState) =>{
            const res = await axios.get("http://localhost:4000/api/itinerary/"+idItinerary)
            dispatch({
                type: "GET_COMMENTS"
            })
            return (res.data.response)
        }
    } ,
    deleteComment: (idComment) =>{
        return async (dispatch, getState) =>{
            const res = await axios.delete("http://localhost:4000/api/comment/"+idComment)
            dispatch({
                type: "DELETE_COMMENTS"
            })
        }
        
    },
    commentItinerary: (token, idItinerary, comment) => {
            console.log({token, idItinerary, comment})
            var id = idItinerary
            var newComment = comment
        return async (dispatch, getState) =>{
           
            const res = await axios.post(`http://localhost:4000/api/itinerary/${id}`,{newComment},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            dispatch({
                type: "POST_COMMENT"
            })
        }

    } 
}

export default usersActions
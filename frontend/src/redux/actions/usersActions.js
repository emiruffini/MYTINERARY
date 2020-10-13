
import axios from "axios"



const usersActions = {
    //Creo una cuenta
    createAccount : newUser =>{
        return async (dispatch, getState) => {       
            const res = await axios.post('http://localhost:4000/api/users', newUser)
            console.log(res)
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
    //Obtengo si existe un usuario
    getUser: user =>{
        return async (dispatch, getState) =>{
            
            const res = await axios.post("http://localhost:4000/api/getUser", user)
            
            dispatch({
                type: "GET_USER_EXISTS"
            })
            return res.data.success
        }
    },
    //Logeo al usuario
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
    //Deslogueo al usuario
    unlogUser : () => {
        return (dispatch, getState) =>{
            dispatch({
                type: "UNLOG_USER_FROM_APP"
            })
        }
    },
    //Funcion para forzar el inicio de sesion y perdurar la misma
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
    //Likeo el itinerario
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
    //Obtengo los likes del usuario
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
    //Obtengo los comentarios de un itinerario
    getComments: (idItinerary) =>{
        return async (dispatch, getState) =>{
            const res = await axios.get("http://localhost:4000/api/itinerary/"+idItinerary)
            dispatch({
                type: "GET_COMMENTS"
            })
            return (res.data.response)
        }
    } ,
    //Borrar un comentario
    deleteComment: (idComment) =>{
        return async (dispatch, getState) =>{
            const res = await axios.delete("http://localhost:4000/api/comment/"+idComment)
            dispatch({
                type: "DELETE_COMMENTS"
            })
        }
        
    },
    //Comentar un itinerario
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
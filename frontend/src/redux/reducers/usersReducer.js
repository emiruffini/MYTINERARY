const initalState = {
    name:"",
    token:"",
    photo:""
}

const userReducer = (state = initalState, action) =>{
    switch(action.type){
        case "LOG_USER_INTO_APP":
            return{
                ...state, 
                name: action.payload.name,
                token: action.payload.token,
                photo: action.payload.photo
            }
        case "UNLOG_USER_FROM_APP":
            return{
                ...state,
                name:"",
                token:"",
                photo:""
            }
        default:
            return state
    }
}

export default userReducer
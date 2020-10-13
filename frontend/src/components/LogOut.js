import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

//Componente para desloguer a un usuario
const LogOut = (props) =>{
    useEffect(()=> {
        props.unlogUser()
        props.history.push('/')
    }, [])
    return(
        null
    )
}

const mapDispatchToProps={
    unlogUser : usersActions.unlogUser
}

export default connect(null, mapDispatchToProps)(LogOut)
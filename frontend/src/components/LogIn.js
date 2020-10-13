import React from 'react'
import Header2 from './Header2'
import Footer2 from './Footer2'
import usersActions from '../redux/actions/usersActions'
import {connect} from 'react-redux'
import GoogleLogin from 'react-google-login';
import'../styles/log.css'

import Swal from 'sweetalert2'
//Componente para iniciar sesión

class LogIn extends React.Component{
    state={
        logUser:{
            user:"",
            password:"",    
        },
        error:""
    }
    getForm = e =>{
        e.preventDefault()
        const property = e.target.name
        const value = e.target.value
        this.setState({
            
            logUser:{
                ...this.state.logUser,
                [property]: value
            }
        })
        
        
    }


    submit =  async e => {
        //Funcion para enviar los datos para iniciar sesion
        e.preventDefault()
        //Validación minima
        if (this.state.logUser.name ==="" || this.state.logUser.password === "" ){
            this.setState({
                error: "Both fields are required"
            }) 
        }else{
            const logUser= {user:this.state.logUser.user , password: this.state.logUser.password}
            const response =  await this.props.logUser(logUser)
            
            if (response.success === true){
                Swal.fire({  title: 'Welcome!',  
                text: `It´s nice to have you again, ${response.user}.`,  
                icon: 'success',  
                showConfirmButton: false, 
                timer: 2000,
                allowOutsideClick: false})
            }else{
                this.setState({
                    error: response
                    //Guardo en el state el error para mostrar el mensaje al usuario
                })    
            }
        }
    }

    responseGoogle = async (response) =>{
        //Funcion llevada a cabo al logearse con google
        this.setState({
            ...this.state,
            logUser:{
                user:response.profileObj.email,
                password:response.profileObj.googleId+response.profileObj.familyName.replace(/ /g, "")
            }
        })

        const res = await this.props.getUser(this.state.logUser)//Confirmo que el usuario exista
        
        if(res === true){
            const resp =  await this.props.logUser(this.state.logUser)
            //Si existe este iniciará sesion
            Swal.fire({  
                title: 'Welcome!',  
                text: `It´s nice to have you again, ${response.profileObj.givenName}.`,  
                icon: 'success',  
                showConfirmButton: false, 
                timer: 2000,
                allowOutsideClick: false
            })
            }else{
                //De no existir deberá crear su cuenta primero con google
                Swal.fire({  
                    title: 'You most sign up!',  
                    text: `Please go to create an account, ${response.profileObj.givenName}.`,  
                    icon: 'warning',  
                    showConfirmButton: false, 
                    timer: 2000,
                    allowOutsideClick: false
                })
            }

    }

    
    render(){

        return (
            <>
            <Header2 />

            <div className="signContainer">
                <div className=" titleContainer">
                    <div className="line"></div>
                    <h1 className="title">Sign In</h1>
                    <div className="line"></div>
                </div>
                <div className="inputs">
                    <span className = {this.state.error === "" ? "" : "logError"}>
                        {this.state.error}
                    </span>
                    
                    <input 
                    className="account" 
                    name="user" 
                    type="text" 
                    placeholder="Enter your user" 
                    onChange={this.getForm}>
                    </input>

                    <input 
                    className="password" 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    onChange={this.getForm}>
                    </input>
                    
                    <button onClick={this.submit} className="send">Sign In</button>
                    <GoogleLogin
                        className="googleBtn"
                        clientId="265571770533-12ttomkrgmba1b8ne8cgt86b9af3i7hh.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>

            <Footer2 />

            </>
        )
    }
}

const mapDispatchToProps = {
    logUser: usersActions.logUser,
    getUser: usersActions.getUser
}

const mapStateToProps = (state)=>{
    return{
        userLog: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
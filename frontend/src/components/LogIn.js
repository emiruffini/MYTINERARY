import React from 'react'
import Header2 from './Header2'
import Footer from './Footer'
import {connect} from 'react-redux'
import'../styles/log.css'
import usersActions from '../redux/actions/usersActions'
import Swal from 'sweetalert2'


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
        e.preventDefault()
        if (this.state.logUser.name ==="" || this.state.logUser.password === "" ){
            this.setState({
                error: "Both fields are required"
            }) 
        }else{
            const logUser= {user:this.state.logUser.user , password: this.state.logUser.password}
            const response =  await this.props.logUser(logUser)
            if (response === true){
                Swal.fire({  title: 'Welcome!',  text: `It´s nice to have you again ,${this.props.userLog.users.name}.`,  icon: 'success',  showConfirmButton: false, timer: 2000,allowOutsideClick: false})
                
                this.props.history.push("/")
                
            }else{
                this.setState({
                    error: response
                })    
            }
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
                    <span className = {this.state.error === "" ? "" : "logError"}>{this.state.error}</span>
                    <input className="account" name="user" type="text" placeholder="Enter your user" onChange={this.getForm}></input>
                    <input className="password" type="password" name="password" placeholder="Enter your password" onChange={this.getForm}></input>
                
                    <button onClick={this.submit} className="send">Sign In</button>
                </div>
            </div>

            <Footer />

            </>
        )
    }
}

const mapDispatchToProps = {
    logUser: usersActions.logUser,
}

const mapStateToProps = (state )=>{
    return{
        userLog: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
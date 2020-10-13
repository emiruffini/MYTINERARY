import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
import Itineraries from './pages/Itineraries'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import NewAccount from './components/NewAccount'
import './styles/generalStyles.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/main.css'
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';



class App extends React.Component{
  render(){
    
   if (this.props.token){
    
    
    var routes =
    (
      <Switch>
        <Route path = "/Home" component={Home} />
        <Route path = "/Cities" component ={Cities} />
        <Route path = "/Itinerary/:id" component ={Itineraries} />
        <Route path ="/log-out" component={LogOut} />
        <Redirect to="/Home" component={Home}/>
      </Switch>
    ) 
    }
    else if(localStorage.getItem('token')){
      this.props.forcedLogin(localStorage.getItem('token'))
      //Fuerzo el login si  hay un token en local storage
      var routes = 
      (
        <Switch>
          <Route path = "/Home" component={Home} />
          <Route path = "/Cities" component ={Cities} />
          <Route path = "/Itinerary/:id" component ={Itineraries} />
          <Route path ="/log-out" component={LogOut} />
          <Redirect to="/Home" component={Home}/>
        </Switch>
      ) 
    }else{
      var routes = 
      (
        <Switch>
          
          <Route path = "/log-in" component ={LogIn}/>
          <Route path = "/create-account" component={NewAccount}/>
          <Redirect to="/log-in" component={Home}/>
  
        </Switch>
      )
    }
    
    
    return(

      <BrowserRouter>
        {routes}
      </BrowserRouter>
      )
  }
}

const mapDispatchToProps ={
  forcedLogin: usersActions.forcedLogin
}
const mapStateToProps = (state) =>{
    return{
      token: state.users.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

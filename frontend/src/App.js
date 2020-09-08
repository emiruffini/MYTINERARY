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



class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = "/Home" component={Home} />
          <Route path = "/Cities" component ={Cities} />
          <Route path = "/Itinerary/:id" component ={Itineraries} />
          <Route path = "/log-in" component ={LogIn}/>
          <Route path = "/create-account" component={NewAccount}/>
          <Route path ="/log-out" component={LogOut} />
          <Redirect to="/Home" component={Home}/>
        </Switch>
      </BrowserRouter>
      ) 
  }
}

export default App

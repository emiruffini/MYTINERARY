import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
import Itineraries from './pages/Itineraries'
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
          <Redirect to="/Home" component={Home}/>
        </Switch>
      </BrowserRouter>
      ) 
  }
}

export default App

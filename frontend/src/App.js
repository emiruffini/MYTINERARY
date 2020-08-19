import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
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
          <Redirect to="/Home" />
        </Switch>
      </BrowserRouter>
      ) 
  }
}

export default App

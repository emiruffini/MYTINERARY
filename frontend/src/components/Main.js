import React, {useEffect} from 'react'
import TopCiudades from './TopCiudades'
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { useDispatch} from "react-redux";
import citiesActions from '../redux/actions/citiesActions'
import {useSelector} from "react-redux";
import {createSelector} from 'reselect';





const Main = (props) => {


    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(citiesActions.getInfo())
    }, [])

    
    const selectUser = createSelector(
      state => state.users,
      logUser => logUser
    )
    const logUser = useSelector(selectUser) 




    return (
      <>
      <div className="contenedor">
        <div className=" titulo">
          <div className="linea"></div>
          <h2 className="palabras">Dream your next trip</h2>
          <div className="linea"></div>
        </div>
        <h3 className= "subtitulo">Destinations travelers love.</h3>
        <div className="icon">
        <NavLink to="/cities"><FontAwesomeIcon className="flecha" icon={faArrowCircleRight}/></NavLink>
        </div>
        <TopCiudades />
        <div className=" titulo">
          <div className="linea"></div>
          <h2 className="palabras">Popular Itineraries</h2>
          <div className="linea"></div>
        </div>
        <h3 className= "subtitulo margin">Find the good out there.</h3>
        <div className="carousel1">
        {<Carousel />}
        </div>
      
      </div>
      </>
    )
}

export default Main

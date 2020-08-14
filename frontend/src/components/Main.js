import React, { createContext } from 'react'
import Paises from './Paises'
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'




const Main = (props) => {
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
        <a href="#"><FontAwesomeIcon className="flecha" icon={faArrowCircleRight}/></a>
        </div>
        <Paises />
        <div className=" titulo">
          <div className="linea"></div>
          <h2 className="palabras">Popular Itinerarys</h2>
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

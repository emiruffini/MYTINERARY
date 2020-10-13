import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFrown} from '@fortawesome/free-solid-svg-icons'

    //Componente de cada ciudad mostrada en la lista de ciudades
const Ciudad = (props) =>{
    
    if (props.ciudad === "vacio"){
        return( 
            <>  
                <div className="mensajeError">
                    <h1>Ups!</h1>
                    <FontAwesomeIcon className="carita" icon={faFrown}/>
                    <h2>No city found</h2>
                </div>
                
            </>
        )
    }else if(props.ciudad.name!== []){
        if (props.ciudad.name.includes(" ")){
            var nombreLimpio = props.ciudad.name.toLowerCase().replace(/\s/g, '-')
            
        }else if(!props.ciudad.name.includes(" ")){
            var nombreLimpio = props.ciudad.name.toLowerCase()
        }
        var foto = require(`../images/${nombreLimpio}1.jpg`)
        return(
            <>  
            <div className ="ciudadFiltro" style={{backgroundImage: `url(${foto})`}}>
                <NavLink to = {`/Itinerary/${props.ciudad._id}`}>
                        <li>{props.ciudad.name + ", "+props.ciudad.country +"."}</li>
                </NavLink>
            </div>
            </>
        )
    }
}

export default Ciudad
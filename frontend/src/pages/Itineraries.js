import React from 'react'

import Navbar from '../components/Navbar'
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer.js'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSadCry} from '@fortawesome/free-solid-svg-icons'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'




class Itineraries extends React.Component{

    state ={
        itinerarios: null,
        ciudad:{
            name:null,
            country:null
        }
    } 
    
    async componentDidMount(){
        var idABuscar = this.props.match.params.id
        var respuesta = await axios.get(`http://127.0.0.1:4000/api/itineraries/${idABuscar}`)
        
        this.setState({
            itinerarios: respuesta.data.response,
        })
        var toRender = (this.state.itinerarios.length !== 0 && this.state.ciudad.name === null) 
        ? this.setState({
            ciudad:{
                name: respuesta.data.response[0].cityId.name,
                country: respuesta.data.response[0].cityId.country
            }
        })
        : (this.state.itinerarios !== null && this.state.ciudad.name === null)
        ?
        this.setState({
            ciudad:{
                name: respuesta.data.response2.name,
                country: respuesta.data.response2.country
            }
        }) 
        : null
        

    }

    render(){
        
            if(this.state.itinerarios ==  null && this.state.ciudad.name == null){
                
                return null
                
            }
            else if(this.state.ciudad.name != null){
                var src1 = this.state.ciudad.name.replace(/\s/g, '-').toLowerCase()
            return (
                <>
                <Navbar />
                <div className="contenedor">
                    <div className=" titulo">
                        <div className="linea"></div>
                        <h2 className="palabras">{this.state.ciudad.name + ", " + this.state.ciudad.country}</h2>
                        <div className="linea"></div>
                    </div>
                    <div className= "imagenesCiudad">
                        <img className="imgCiudad" src = {require("../images/"+src1+".jpg")}></img>
                        <img className="imgCiudad" src = {require("../images/"+src1+"1.jpg")}></img>
                        <img className="imgCiudad" src = {require("../images/"+src1+"2.jpg")}></img>
                        <img className="imgCiudad" src = {require("../images/"+src1+"3.jpg")}></img>
                    </div>
                    {(this.state.itinerarios.length === 0 && this.state.ciudad.name !== null)
                    ? 
                    <div style={{width:"100%", display:"flex", justifyContent:"center", margin:'1rem auto'}}>
                        <div className = "itinerario">
                            <h1 className="tituloItinerario">There's nothing here</h1>
                            <FontAwesomeIcon className="caritaTriste" icon={faSadCry}/>
                            <button className="botonActivities">Add an Itinerary</button>
                        </div>
                    </div>
                    :
                    this.state.itinerarios.map(itinerario => {
                        return(<Itinerary itinerarios = {itinerario}/>)
                    })} 
                    
                    <div className="bottomButton">
                        <NavLink to= "/Cities">
                            <FontAwesomeIcon className="atras" icon={faArrowCircleLeft}/>
                        </NavLink>
                        <NavLink to= "/Home">
                            <FontAwesomeIcon className="home" icon={faHome}/>
                        </NavLink>
                    </div>
                </div>
                <Footer /> 
                </>
            )
            }else{
                return null
            }
    }
}


export default (Itineraries)
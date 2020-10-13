import React from 'react'

import Navbar from '../components/Navbar'
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer.js'
import citiesActions from '../redux/actions/citiesActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSadCry} from '@fortawesome/free-solid-svg-icons'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'



//Componente que me muestra los itinerarios de cada ciudad
class Itineraries extends React.Component{

    state ={
        itinerarios: null,
        ciudad:{
            name:null,
            country:null
        }
    } 
    
    async componentDidMount(){
        
        window.scrollTo(0, 0)
        //Cuando el componente se monta obtengo los itinerarios
        var idABuscar = this.props.match.params.id
        var res = await this.props.getItineraries(idABuscar)
        console.log(res)
        if(res !== undefined){
            this.setState({
                itinerarios: res.response,
            })
        }
        var toRender = (this.state.itinerarios.length !== 0 && this.state.ciudad.name === null) 
        //Si la ciudad tiene itinerarios, cargo su nombre en el state, para mostrarla en el titulo
        ? this.setState({
            ciudad:{
                name: res.response[0].cityId.name,
                country: res.response[0].cityId.country
            }
        })
        : (this.state.itinerarios !== null && this.state.ciudad.name === null)
        ?
        //Si la ciudad no tiene itinerarios, la respuesta del backend es otra pero obtengo su nombre para mostrarlo
        this.setState({
            ciudad:{
                name: res.response2.name,
                country: res.response2.country
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
                    this.state.itinerarios.map(itinerary => {
                        return(<Itinerary itinerary = {itinerary}/>)
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
const mapDispatchToProps = {
    getItineraries: citiesActions.getItineraries
}

export default connect(null, mapDispatchToProps)(Itineraries)
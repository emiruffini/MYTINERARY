import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import Activities from './Activities'


import "../styles/itineraries.css"

class Itinerary extends React.Component{
    state = {
        viewMore: null
    }
    
    render(){

        function price(data){
            switch (data){
                case 1: return ("$")
                case 2: return ("$$")
                case 3: return ("$$$")
                case 4: return ("$$$$")
                case 5: return ("$$$$$")
                default: return ("unknowkn")
            }
        }
        
        const changeStatus = () =>{
            this.setState({
                viewMore: !this.state.viewMore
            })
        }


        return (
            <>
                <div className="contenedor">   
                    <div style={{width:"100%", display:"flex", justifyContent:"center", margin:'1rem auto'}}>
                        
                        <div className = "itinerario">

                            <div className="tituloItinerario">
                                <h3>{this.props.itinerarios.title}</h3>
                            </div>

                            <div className="contenidoItinerario"> 

                                <div className="fotoUser">
                                    <img src ={require( `../images/users/${this.props.itinerarios.porfilePic}.jpg`)} alt= "imagen Usuario"></img>
                                    <p>Made by: <span className="autor">"{this.props.itinerarios.porfilePic}"</span></p>
                                </div>

                                <div className="textoItinerario">

                                    <div className="parrafos">
                                        <p>Duration: {this.props.itinerarios.duration} hours</p>
                                        <p>{price(this.props.itinerarios.price)}</p>
                                        <p><FontAwesomeIcon className="corazon" icon={faHeart}/> {this.props.itinerarios.rating}</p>
                                    </div>

                                    <div className="hashtags">
                                        {this.props.itinerarios.hashtag.map(hashtag =>{
                                            return <p>#{hashtag}</p>
                                        })}               
                                    </div>

                                </div>

                            </div>
                            
                            {this.state.viewMore && <Activities idItinerary ={this.props.itinerarios._id}/>}
                            <button onClick={changeStatus} className="botonActivities">{this.state.viewMore ? "View Less" : "View More"}</button>
                            

                        </div>
                    
                    </div>

                </div>          
            </>
        )    
    }
}

export default Itinerary
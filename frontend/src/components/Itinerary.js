import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import Activities from './Activities'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import "../styles/itineraries.css"

//Componente para mostrar un itinerario
class Itinerary extends React.Component{
    state = {
        viewMore: null, 
        likesAmmount:"",
        liked: false,
        likesArray:""

    }

     async componentDidMount(){
         //Cuando el componente se monta obtengo si el usuario lo likeo anteriormente o no
        await this.liked()
    } 



    changeStatus = () =>{
        this.setState({
            ...this.state,
            viewMore: !this.state.viewMore
        })
    }

    liked = async () =>{
        var likes = await this.props.getLikes(this.props.token)
     
        
        if( likes !== null && likes.length !== 0){ 
            
            if  (likes.includes(this.props.itinerary._id)){
                this.setState({
                    ...this.state,
                    liked: true
                })
            }else{
                this.setState({
                    ...this.state,
                    liked: false
                })
            }
        }
    }



    likes = async () =>{
        //Funcion para likear un itinerario
        var likesAmmount = await this.props.likeItinerary(this.props.itinerary._id, this.props.token)
        this.liked()
        this.setState({
            ...this.state,
            likesAmmount
        })
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
        

        
        
        
        return (
            <>
                <div className="contenedor1">   
                    <div style={{width:"100%", display:"flex", justifyContent:"center", margin:'1rem auto'}}>
                        
                        <div className = "itinerario">

                            <div className="tituloItinerario">
                                <h3>{this.props.itinerary.title}</h3>
                            </div>

                            <div className="contenidoItinerario"> 

                                <div className="fotoUser">
                                    <img src ={require( `../images/users/${this.props.itinerary.porfilePic}.jpg`)} alt= "imagen Usuario"></img>
                                    <p>Made by: <span className="autor">"{this.props.itinerary.porfilePic}"</span></p>
                                </div>

                                <div className="textoItinerario">

                                    <div className="parrafos">
                                        <p>Duration: {this.props.itinerary.duration} hours</p>
                                        <p>{price(this.props.itinerary.price)}</p>
                                        <p><button 
                                            className="like" 
                                            onClick={this.likes}
                                            >
                                                <FontAwesomeIcon 
                                                className={this.state.liked ? "red" : "white"} 
                                                icon={faHeart}/>
                                            </button> 
                                            {this.state.likesAmmount === "" 
                                            ? this.props.itinerary.rating 
                                            : this.state.likesAmmount
                                            } {/* Actualizo la cantidad de likes tras likear */}
                                            </p>
                                    </div>
                                    <div className="hashtags">
                                        {this.props.itinerary.hashtag.map(hashtag =>{
                                            return <p>#{hashtag}</p>
                                        })}               
                                    </div>

                                </div>

                            </div>
                            
                            {this.state.viewMore && <Activities idItinerary ={this.props.itinerary._id}/>}
                            <button 
                                onClick={this.changeStatus} 
                                className="botonActivities"
                            >{this.state.viewMore ? "View Less" : "View More"}
                            </button>
                            

                        </div>
                    
                    </div>

                </div>          
            </>
        )    
    }
}


const mapStateToProps = (state) =>{
    return{
        token: state.users.token
    }
}

const mapDispatchToProps = {
    likeItinerary: usersActions.likeItinerary,
    getLikes: usersActions.getLikes
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
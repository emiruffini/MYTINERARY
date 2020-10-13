import React from 'react'
import Ciudad from './Ciudad'
import '../styles/ciudadesFiltro.css'
import {connect} from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'

//Componente donde se mostrarpa cada componente ciudad y donde se encuentra el filtro

class Ciudades extends React.Component{
    state ={
        ciudades: [],
        ciudadesFiltradas:[],
    } 
      
   componentDidMount(){
        this.setState({
            ciudades : this.props.cities.cities.response,
            ciudadesFiltradas : this.props.cities.cities.response
        })
    }
    
    render(){
        const filter = e =>{
            const valorBuscar = e.target.value.trim()
            const filtrados = this.state.ciudades.filter(ciudad => (
                    ciudad.name.toLowerCase().indexOf(valorBuscar.toLowerCase()) === 0)
                    )      
            if (filtrados.length === 0){
                this.setState({
                    ciudadesFiltradas: ["vacio"]
                })
                
            }else{
                this.setState({
                    ciudadesFiltradas: filtrados
                })
            }
        }

       if(this.state.ciudadesFiltradas !== undefined){
           
            return(
                <>
                    <div className="contenedor">
                    <div className=" titulo">
                        <div className="linea"></div>
                            <h2 className="palabras">Search by city</h2>
                        <div className="linea"></div>
                    </div>
                    
                    <div className="contenedorInput">
                    <input className="filtro" type="text" placeholder="Enter city to search" name="search" id="search"
                    onChange={filter}></input>
                    </div>
                    <ul className= "ciudadesFiltro">
                        {this.state.ciudadesFiltradas.sort((a, b) => (a.name > b.name)).map(ciudad => (
                        <Ciudad ciudad = {ciudad} />))}
                    </ul>
                    </div>
                    
                </>
            )
        }else{
            return (
                <Redirect to="/" />
            )
        }
        
        
    }
}



const mapStateToProps =(state)=>{
    return{
        cities: state.cities
    }
}


export default connect(mapStateToProps)(Ciudades)
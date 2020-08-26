import React from 'react'
import Ciudad from './Ciudad'
import '../styles/ciudadesFiltro.css'
import axios from 'axios'

class Ciudades extends React.Component{
    state ={
        ciudades: [],
        ciudadesFiltradas:[],
    } 
      
    async componentDidMount(){
        const respuesta = await axios.get('http://localhost:4000/api/cities')
            this.setState({
                ciudades: respuesta.data.response,
                ciudadesFiltradas: respuesta.data.response
                
            })
            console.log(respuesta.data.response)
            
    }

        
    
    render(){
        const filter = e =>{
            const valorBuscar = e.target.value.trim()
            const filtrados = this.state.ciudades.filter(ciudad => (
                    ciudad.nombre.toLowerCase().indexOf(valorBuscar.toLowerCase()) === 0)
                    )
            console.log(filtrados)        
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
        
        
    }
}
export default Ciudades
import React from 'react'
import Ciudad from './Ciudad'
import '../styles/ciudadesFiltro.css'


class Ciudades extends React.Component{
    state ={
        ciudades: ["amsterdam","bangkok","barcelona","berlin","bilbao","bruges","brussels","buenos aires","cancun","madrid","mexico city","milan","new york city","paris","rio de janeiro","rome","tokio"],

        ciudadesFiltradas:["amsterdam","bangkok","barcelona","berlin","bilbao","bruges","brussels","buenos aires","cancun","madrid","mexico city","milan","new york city","paris","rio de janeiro","rome","tokio"],
    } 
      

    
    render(){
        const filter = e =>{
            const valorBuscar = e.target.value
            const filtrados = this.state.ciudades.filter(ciudad => (
                    ciudad.toLowerCase().indexOf(valorBuscar.toLowerCase()) === 0)
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

            console.log(this.state.ciudadesFiltrados)
            
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
                    {this.state.ciudadesFiltradas.map(ciudad => (
                    <Ciudad ciudad = {ciudad} />))}
                </ul>
                </div>
                
            </>
        )
        
        
    }
}
export default Ciudades
import React from 'react'
import {NavLink} from 'react-router-dom'

class Slide extends React.Component{
    render(){
        //Componente que muestra cada ciudad en el carrousel
        if (this.props.cities.slide != undefined){
        
        return(

            <>
                <div className="divCarousel" style={{display:'flex', flexWrap:'wrap', width:'100%'}}>
                    {this.props.cities.slide.map(ciudad=>{ 
                        if (ciudad.name.includes(" ")){
                            var nombreLimpio = ciudad.name.replace(/\s/g, '-')
                            var source = require('../images/'+nombreLimpio.toLowerCase()+'2.jpg')
                        }else{
                            var source = require('../images/'+ciudad.name.toLowerCase()+'2.jpg')
                        }
                        
                        return(
                            <>
                            <div className="fotox">
                                <div className="fotoxx">   
                                    <NavLink to = '/Cities'>
                                        <img className="imagen"  src={source}/>
                                        <h3 className="pie1">{ciudad.name}</h3>
                                    </NavLink>
                                
                                </div>
                            </div> 
                        </>
                    )
                    })}
                </div>
                
            </>
        )
    }else{
        return(<h1>Loading</h1>)
    }
    }
    
}

export default Slide
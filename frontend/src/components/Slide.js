import React from 'react'

class Slide extends React.Component{
    render(){

        return(

            <>
                
                <div className="divCarousel" style={{display:'flex', flexWrap:'wrap', width:'100%'}}>
                    {this.props.items.slide.map(ciudades=>{ 
                        if (ciudades.includes(" ")){
                            var nombreLimpio = ciudades.replace(/\s/g, '-')
                            var source = require('../images/'+nombreLimpio+'2.jpg')
                        }else{
                            var source = require('../images/'+ciudades+'2.jpg')
                        }
                        
                        return(
                            <>
                            <div className="fotox">
                                <div className="fotoxx">   
                                
                                    <img className="imagen"  src={source}/>
                                    <h3 className="pie1">{ciudades}</h3>
                                
                                </div>
                            </div> 
                        </>
                    )
                    })}
                </div>
                
            </>
        )
    }
}

export default Slide
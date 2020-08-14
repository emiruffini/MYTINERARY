import React from 'react'


class Slide extends React.Component{
    
    render(){
        return(

            <>
                {console.log(this.props)}
                <div className="divCarousel" style={{display:'flex', flexWrap:'wrap', width:'100%'}}>
                    {this.props.items.slide.map(ciudades=>{ 
                        var source = require('../images/'+ciudades+'2.jpg')
                        return(
                            <>
                        <div className="fotox">
                            <div className="fotoxx">   
                            <a href="#">
                            <img className="imagen"  src={source}/>
                            <h3 className="pie1">{ciudades}</h3>
                            </a>
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
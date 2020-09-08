import React from 'react'
import axios from 'axios'
import Activity from './Activity'
import Comments from './Comments'
import '../styles/activities.css'

class Activities extends React.Component{

    state = {
        activities: null
    }

    async componentDidMount(){
        var idABuscar = this.props.idItinerary
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/activities/${idABuscar}`)
        this.setState({
            activities: respuesta.data.response
        })
        console.log(this.state)
    }
    
    
    
    
    render(){
        if(this.state.activities === null){
            return null
        }
        return(
            <>
                <div className="activities">
                    <h4 className="title">Itinerary Activities</h4>
                    <div className="activitiesContainer" >
                    {this.state.activities.length !== 0 
                    ?this.state.activities.map(activity => {
                            return(
                                <Activity activity= {activity}/>
                            )
                        })
                    : <p>No activities loaded</p>    
                    }
                    </div>
                    <div className="commentsContainer ">
                    <h4 className="title">Comments</h4>
                        <Comments />
                    </div>

                </div>
            </>

        )
    }
}

export default Activities
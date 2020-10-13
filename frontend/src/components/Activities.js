import React from 'react'
import Activity from './Activity'
import Comments from './Comments'
import '../styles/activities.css'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

class Activities extends React.Component{

    state = {
        activities: null
    }

    async componentDidMount(){
        //Cuando el componente se monta obtengo las actividades de un itinerario puntual
        var idToSearch = this.props.idItinerary
        const res = await this.props.getActivities(idToSearch)
        this.setState({
            activities: res
        })
        
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
                        <Comments idItinerary = {this.props.idItinerary}/>
                    </div>

                </div>
            </>

        )
    }
}

const mapDispatchToProps = {
    getActivities: citiesActions.getActivities
}


export default connect(null, mapDispatchToProps) (Activities)
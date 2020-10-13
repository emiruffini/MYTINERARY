import React from 'react'

class Activity extends React.Component{

    render(){
        var src = require("../images/activities/"+this.props.activity.photoName+".jpg")
        return (
            <>
                <div 
                className= "activityContainer" 
                style={{backgroundImage:`url(${src})`}} 
                >
                    <h4>{this.props.activity.name}</h4>
                </div>
            </>
        )
    }

}

export default Activity
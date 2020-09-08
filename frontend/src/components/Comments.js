import React from 'react'

class Comments extends React.Component{

    render(){
        return(
            <div className="commentsContainer">
                <div className="comments">
                    <p>No comments yet</p>
                </div>
                <input type="text" placeholder="Insert a comment"></input>
                <button>Submit</button>
            </div>
        )
    }


}

export default Comments
import React from 'react'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import '../styles/comments.css'
class Comments extends React.Component{

    state={
        newComment:"",
        user:"",
        itinerary: this.props.idItinerary,
        comments:[]
    }
    
    

componentDidMount(){
    //Obtengo todos los comentarios cuando el componente se monta
    this.getComments()
}

getComments = async () =>{
    //funcion para obtener los comentarios
    var comments = await this.props.getComments(this.state.itinerary)
    this.setState({
        ...this.state,
        comments
    })
}

deleteComment = async (id) =>{
    //Funcion para borrar los comentarios
    await this.props.deleteComment(id)
    this.getComments()
}

getNewComment = (e) =>{
    //Funcion para obtener el texto del input
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name

    this.setState({
        ...this.state,
        [name]: value
    })

}

sendComment = async () =>{
    //Funcion para enviar un comentario
    var response = await this.props.commentItinerary(this.props.token, 
        this.state.itinerary, 
        this.state.newComment)
    this.getComments()
    this.setState({
        ...this.state,
        newComment: ""
    })
}

    render(){

        return(
            <div className="commentsContainer">
                <div className="comments">
                    {this.state.comments.map(comment =>{
                        return(
                            <div className="commentContainer">
                                
                                <div className="nameDelete">
                                    <p className="userName">{comment.user} said:</p>
                                    {this.props.user === comment.user 
                                    ? 
                                    <button className="deleteButton" onClick={
                                        () =>this.deleteComment(comment._id)}
                                    >
                                        X
                                    </button> 
                                    : null }
                                </div>

                                <p className="comment">{comment.comment}</p> 
                               
                            </div>
                        )
                    })}
                </div>
                <div className="inputContainer">
                    <input 
                    className="input" 
                    onChange={this.getNewComment} 
                    value={this.state.newComment} 
                    type="text" name="newComment" 
                    placeholder="Insert a comment"></input>
                    <button className="submitBtn" onClick={this.sendComment}>Submit</button>
                </div>
            </div>
        )
    }


}

const mapStateToProps  = (state) =>{
    return{
        token: state.users.token,
        user: state.users.name
    }
}

const mapDispatchToProps = {
    commentItinerary: usersActions.commentItinerary,
    getComments: usersActions.getComments,
    deleteComment: usersActions.deleteComment
}


export default connect(mapStateToProps, mapDispatchToProps) (Comments)
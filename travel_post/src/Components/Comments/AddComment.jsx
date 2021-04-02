import React, {Component} from 'react'
import commentService from '/React_Projects/travelPost/travel_post/src/Services/CommentService'

class AddComment extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            comment: '',
            user: '',
            date: '',
            points: 0,
        }
        this.change= this.change.bind(this)
        this.post= this.post.bind(this)
        
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    post(){
       let words={
            id: this.state.id,
            comment: this.state.comment,
            user: this.state.user,
            date: this.state.date,
            points: this.state.points,

        }
        commentService.postComment(words).then(this.props.history.push('/DisplayBlog'))
        alert("You've posted a comment, check it out")
    }

    render(){
        return(
            <div>
                <h1>post a comment for all to see</h1>
                <form onSubmit={this.post}>
                    <div>
                <label>comment</label>
                <textarea name="comment" onChange={this.change}></textarea>
                </div>

                <div>
                <button type="submit">Write comment</button>
                </div>
                
                </form>
                </div>
        )
    }
}

export default AddComment
import React, {Component} from 'react';
import blogService from '/React_Projects/travelPost/travel_post/src/Services/BlogServices'

class AddBlog extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            name: '',
            description: '',
            picture: '',
            date: '',
        }
        this.change = this.change.bind(this)
        this.addBlog = this.addBlog.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addBlog(){
        let blog = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            picture: this.state.picture,
            date: this.state.date
        }
        blogService.postBlog(blog).then(this.props.history.push('/DisplayBlog'))

    }
    render(){
        return(
            <div>
                <h1> What adventures do you want to share</h1>

                <form onSubmit ={this.addBlog}>
                    <div>
                        <div>
                            <label>Id:</label>
                            <input type ="text" value={this.state.id} disabled></input>

                        </div>
                        <div>
                            <label>Title:</label>
                            <input type ="text" value={this.state.name} ></input>
                            
                        </div>
                        <div>
                            <label>Picture:</label>
                            <input type ="text" value={this.state.Picture} ></input>
                            
                        </div>
                        <div>
                            <label>Description:</label>
                            <input type ="text" value={this.state.description} ></input>
                            
                        </div>
                        <div>
                            <label>date:</label>
                            <input type ="text" value={this.state.date} placeholder="mm:dd:yyyy"></input>
                            
                        </div>
                        <div>
                            <button type="submit">Post!</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddBlog;
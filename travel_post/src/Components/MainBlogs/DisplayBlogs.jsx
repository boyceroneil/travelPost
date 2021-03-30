import React, {Component} from 'react'
import blogService from '/React_Projects/travelPost/travel_post/src/Services/BlogServices'

class DisplayBlog extends Component{
    constructor(props){
        super(props)
        this.state={
            blog:[]
        }
        this.deleteBlog = this.deleteBlog.bind(this);
        this.createBlog = this.createBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
    }
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){
        blogService.retrieveAllBlog()
        .then(response =>{
            this.setState({
                blog: response.data,
            })
        })
    }

    deleteBlog(id){
        blogService.deleteBlog(id)
        .then(response => {
            this.setState({message: `deleting the blog`})
        })
    }
    createBlog(){
        this.props.history.push(`/CreatePost`)
    }
    updateBlog(id,name,picture,date,description){
        this.props.history.push(`/UpdateBlog/${id}/${name}/${picture}/${date}/${description}`)
        }
    

    render(){
        var likes =0
        function likeTotal(){
            document.getElementById("show").innerHTML=likes;
            likes=likes+1;
        }
        return(
            <div className="entirePage">
            <header className="header">
                <h1><b>Travel Posting</b></h1>
            </header>
            <div>
           {this.state.blog.map(
               blog =>
               <div>
               <label>{blog.id}</label>
               <label>{blog.date}</label>
               <img src={blog.picture} alt="can't display/broken link" width='100%' />
               <h3><b>{blog.name}</b></h3>
               <h5>{blog.description}</h5>

               <div>
               <button className="commentBtn"> comment</button>
               </div>

               <div>
               <button className="deleteBtn" onClick={()=>this.deleteBlog(blog.id)}> delete blog</button>
               </div>

                   <div className="likeBtn">
                       <p type="text" id="show"></p>
               <button className="likeBtn" onClick="likeTotal()">like button</button>
               </div>

               </div>
           )} 
            </div>
            </div>
        )
    }
}
export default DisplayBlog;
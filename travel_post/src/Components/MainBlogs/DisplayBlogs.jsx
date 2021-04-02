import React, {Component} from 'react'
import blogService from '/React_Projects/travelPost/travel_post/src/Services/BlogServices'
import commentService from '/React_Projects/travelPost/travel_post/src/Services/CommentService'

class DisplayBlog extends Component{
    constructor(props){
        super(props)
        this.state={
            blog:[],
            comment:[],
            count:0,
        }
        this.deleteBlog = this.deleteBlog.bind(this);
        this.createBlog = this.createBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        //this.likeTotal = this.likeTotal.bind(this);
        this.createComment = this.createComment.bind(this);
        this.refreshList = this.refreshList.bind(this);
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        blogService.retrieveAllBlog()
        .then(response =>{
            this.setState({
                blog: response.data,
            })
        })
        commentService.retrieveAllComment().then(response=>{
            this.setState({
                comment:response.data,
            })
        })
    }
    createComment(){
    this.props.history.push(`/AddComment`)        
    }

    deleteBlog(id){
        blogService.deleteBlog(id)
        .then(response => {
            this.setState({message: `deleting the blog`})
        })
        this.componentDidMount()
    }
    createBlog(){
        this.props.history.push(`/CreatePost`)
    }
    updateBlog(id,name,picture,date,description,like){
        this.props.history.push(`/UpdateBlog/${id}/${name}/${picture}/${date}/${description}/${like}`)
        }
    likeTotal(value){
        value= value+1
    return    this.setState({count: this.state.count+1})
    }

    render(){
        
        function likeTotal(likes){
            document.getElementById("show").innerHTML=likes;
            likes=likes+1;
        }
        return(
            <html>
            <div className="entirePage">
            <header className="header">
                <h1><b>Travel Posting</b></h1>
            </header>
            <div>
           {this.state.blog.map(
               blog =>
               <div>
                   {/* <div><label > {blog.id}</label>
                    </div> */}
                <h3><b>{blog.name}</b></h3>
               
                <div>
               <button className="updateBtn" onClick={()=>this.updateBlog(blog.id, blog.name, blog.picture, blog.date, blog.description, blog.like)}> update</button>
               </div>
               
               <label>{blog.date}</label>
               <p></p>
               <img src={blog.picture} width="200" height="200"alt="broken"/>
               <h5>{blog.description}</h5>

               <div>
                   {this.state.comment.map(
                       comment =>
                       <div> 
                           <h4>{comment.comment} </h4>
                           <div>
                           <label>{comment.points}</label>
                       </div>    
                       </div>
                       
                   )}
                   </div>

               <div>
               <button className="commentBtn" onClick={()=> this.createComment()}> comment</button>
               </div>

               <div>
               <button className="deleteBtn" onClick={()=>this.deleteBlog(blog.id)}> delete blog</button>
               </div>

                   <div >
                       <p type="text" id="show">{blog.like}</p>
               <button className="likeBtn" onClick={()=> likeTotal(blog.like)}>like button</button>
               </div>

               </div>
           )} 
            </div>
            </div>
            </html>
        )
    }
}
export default DisplayBlog;
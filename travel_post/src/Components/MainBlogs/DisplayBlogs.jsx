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
        // this.likeTotal = this.likeTotal.bind(this);
        this.createComment = this.createComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
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
        this.refreshList();
    }

    deleteComment(id){
        commentService.deleteComment(id)
        .then(response => {
            this.setState({message: `deleting the blog`})
        })
        this.refreshList();
    }
    
    createBlog(){
        this.props.history.push(`/CreatePost`)
    }
    
    updateBlog(id,name,picture,date,description,like,user_id){
        console.log('update blog was clicked')
        this.props.history.push(`/UpdateBlog/${id}/${name}/${picture}/${date}/${description}/${like}`)///${user_id}
        }
    
    // likeTotal(value){
    // let blog ={
    //     id: value.id,
    //     name: value.name,
    //     picture: value.picture,
    //     description: value.description,
    //     date: value.date,
    //     like: value.like+1,
    // }
    // this.setState({count: blog.like+1});
    // blog.like = this.state.count;
    // document.getElementById("show")
    
    // blogService.putBlog(blog).then(()=> this.props.history.push("/DisplayBlog"))
    // }
    

    render(){
        
        function likeTotal(likes){
            document.getElementById("show").innerHTML=likes;
            likes=likes+1;
        }

        function readFileDataAsBase64(e){
    const file = e.target.files[0];

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            resolve(event.target.result);
        };

        reader.onerror = (err) => {
            reject(err);
        };

        reader.readAsDataURL(file);
    });
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
                                   <div>
               <button className="updateBtn" onClick={()=>this.updateBlog(blog.id, blog.name, blog.picture, blog.date, blog.description, blog.like)}> update</button>
               </div>



                <h3><b>{blog.name}</b></h3>
               

               
               <label>{blog.date}</label>
               <p></p>
               <img src={blog.picture} width="200" height="200"alt="broken"/>
               <h5>{blog.description}</h5>
                        
               <div>
                   {this.state.comment.map(
                       comment =>

                       <div className="element1"> 
                           <h4>{comment.comment} </h4>
                           <div className="element2">
                           <label>{comment.id}</label>
                       </div>    
                       
                       <div>
               <button className="deleteBtn" onClick={()=>this.deleteComment(comment.id)}> delete comment</button>
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
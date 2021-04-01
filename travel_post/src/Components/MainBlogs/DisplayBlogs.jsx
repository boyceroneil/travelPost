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
        this.likeTotal = this.likeTotal.bind(this);
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
        return value 
        //this.setState(prevState => {
            //       return{
            //         count: prevState.count +1
            //       }
    }

    render(){
        
        // function likeTotal(likes){
        //     document.getElementById("show").innerHTML=likes;
        //     likes=likes+1;
        // }
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
                <h3><b>{blog.name}</b></h3>
               
                <div>
               <button className="updateBtn" onClick={()=>this.updateBlog(blog.id, blog.name, blog.picture, blog.date, blog.description, blog.like)}> update</button>
               </div>
               
               <label>{blog.date}</label>
               <p></p>
               <img src={blog.picture} width="100%" alt="broken"></img>
               <h5>{blog.description}</h5>

               <div>
               <button className="commentBtn"> comment</button>
               </div>

               <div>
               <button className="deleteBtn" onClick={()=>this.deleteBlog(blog.id)}> delete blog</button>
               </div>

                   <div >
                       <p type="text" id="show">{blog.like}</p>
               <button className="likeBtn" onClick={()=> this.likeTotal(blog.like)}>like button</button>
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
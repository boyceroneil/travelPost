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
            like: 0,
        }
        this.change = this.change.bind(this)
        this.addBlog = this.addBlog.bind(this)
       // this.readFileDataAsBase64 = this.readFileDataAsBase64.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    addBlog(){
        //let splits= this.state.picture.split('fakepath\\');
        let blog = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
          //  picture: splits[1],
          picture: this.state.picture,
            date: this.state.date,
            like: this.state.like
        }
        // this.props.history.push(`/uploadPicture/${blog.id}/${blog.name}/${blog.date}/${blog.description}/${blog.like}`)
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
                            <input type ="text" name="name" onChange={this.change} ></input>
                            
                        </div>
                        <div>
                            <label>Picture:</label>
                            <input type ="text" name="picture" onChange={this.change} accept="image/*"></input>
                            
                        </div>
                        <div>
                            <label>Description:</label>
                            <input type ="text" name="description" onChange={this.change} ></input>
                            
                        </div>
                        <div>
                            <label>date:</label>
                            <input type ="date" name="date" placeholder="yyyy-MM-dd HH:mm:ss" onChange={this.change}></input>
                            
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

        // function readFileDataAsBase64(e){
        //     const file = e.target.files[0];
        
        //     return new Promise((resolve, reject) => {
        //         const reader = new FileReader();
        
        //         reader.onload = (event) => {
        //             resolve(event.target.result);
        //         };
        
        //         reader.onerror = (err) => {
        //             reject(err);
        //         };
        
        //         reader.readAsDataURL(file);
        //     });
        //         }

        // readFileDataAsBase64(e){
        //     const file = e.target.files[0];
        //     return new Promise((resolve, reject) => {
        //         const reader = new FileReader();
        
        //         reader.onload = (event) => {
        //             resolve(event.target.result);
        //         };
        
        //         reader.onerror = (err) => {
        //             reject(err);
        //         };
        //         this.setState({
        //             [e.target.name]: reader.readAsDataURL(file)
        //         })
                
        //     });        
        // }
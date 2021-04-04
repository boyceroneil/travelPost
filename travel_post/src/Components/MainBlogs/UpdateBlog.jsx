import blogService from '/React_Projects/travelPost/travel_post/src/Services/BlogServices'
import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik'
class UpdateBlog extends Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            name: this.props.match.params.name,
            picture: this.props.match.params.picture,
            description: this.props.match.params.description,
            date: this.props.match.params.date,
            likes: this.props.match.params.likes
        }
        this.update = this.update.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    cancel(){
        this.props.history.push('/DisplayBlog')
    }
    update(values){
        let blog = {
            id:this.state.id,
            name: values.name,
            picture: this.state.picture,
            description: values.description,
            date: values.date,
            likes: this.state.likes
        }
        blogService.putBlog(blog).then(()=> this.props.history.push("/DisplayBlog"))
    }

    render(){
      
      
        let {id, name, picture, description, date, likes}= this.state
        return(
<div>
        <div>
            <div>
            <h2>Update values </h2>
            </div>
<Formik
initialValues={{id, name, picture, description, date, likes}}
onSubmit={this.update}
enableReinitialize={true}
>
{
    (props) => (
        <Form>
            <fieldset>
                <label>Id</label>
                <Field type="text" name="id" disabled />
            </fieldset>

            <fieldset>
                <label>title</label>
                <Field type="text" name="name"  />
            </fieldset>
            
            <fieldset>
                <label>picture</label>
                <Field type="text" name="picture" disabled/>
            </fieldset>
            
            <fieldset>
                <label>description</label>
                <Field type="text" name="description"  />
            </fieldset>

            <fieldset>
                <label>date</label>
                <Field type="date" name="date"  />
            </fieldset>

            <button type="submit"> Update</button>
        </Form>
    )
}
</Formik>
<button onClick={()=>this.cancel()}>Cancel</button>
       
        </div>
        </div>
        )
    }

}

export default UpdateBlog;

 
{/* <form onSubmit ={this.update}>
<div>
    <div>
        <label>Id:</label>
        <input type ="text" value={this.state.id} disabled></input>

    </div>
    <div>
        <label>Title:</label>
        <input type ="text" name="name" onChange={this.change} >{this.state.name}</input>
        
    </div>
    <div>
        <label>Picture:</label>
        <input type ="file" name="picture" onChange={this.change} accept="image/*" value={this.state.picture}></input>
        
    </div>
    <div>
        <label>Description:</label>
        <input type ="text" name="description" onChange={this.change} >{this.state.description}</input>
        
    </div>
    
    <div>
        <label>date:</label>
        <input type ="date" name="date" disabled value ={this.state.date}></input>
        
    </div>

    <div>
        <label>likes:</label>
        <input type ="date" name="text" disabled value={this.state.likes}></input>
        
    </div>
    <div>
        <button type="submit">Post!</button>
    </div>
</div>
</form>   
) */}
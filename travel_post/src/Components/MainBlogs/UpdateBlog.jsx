import blogService from '/React_Projects/travelPost/travel_post/src/Services/BlogServices'
import React, {Component} from 'react';
import {Formik, Form, Field} from 'formic'
class UpdateBlog extends Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            name: this.props.match.params.name,
            picture: this.props.match.params.picture,
            description: this.props.match.params.description,
            date: this.props.match.params.date
        }
        this.update = this.update.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    update(values){
        let blog = {
            id:values.id,
            name: values.name,
            picture: values.picture,
            description: values.description,
            date: values.date
        }
        blogService.putBlog(blog).then(()=> this.props.history.push("/DisplayBlog"))
    }

    render(){
        let {id, name, picture, description, date}
        return(
            <div>
                <div>
                    <div>
                        <h2>What do you want to change</h2>
                    </div>
                    <Formik
                    initialValues={{id, name, picture, description, date}}
                    onSubmit={this.update}
                    enableReinitialize ={true}>
                        {
                            (props) =>(
                                <Form>
                                    <fieldset>
                <label>Id</label>
                <Field type="text" name="id" disabled />
            </fieldset>

            <fieldset>
                <label>Picture</label>
                <Field type="text" name="picture" disabled />
            </fieldset>

            <fieldset>
                <label>Title</label>
                <Field type="text" name="name"  />
            </fieldset>
            
            <fieldset>
                <label>description</label>
                <Field type="text" name="description" />
            </fieldset>
            
            <fieldset>
                <label>date</label>
                <Field type="text" name="date" disabled />
            </fieldset>

            <button type ="submit">Update post</button>
 
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

}

export default UpdateBlog;
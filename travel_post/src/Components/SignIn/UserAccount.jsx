import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import UserService from '/React_Projects/travelPost/travel_post/src/Services/UserService'


class UserAccount extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:''
        }
        this.change = this.change.bind(this)
        this.create = this.create.bind(this)
        this.login = this.login.bind(this)
    }


    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    create(){
        let account ={
            id: this.state.id,
            name: this.state.name,
            password: this.state.password
        }
        UserService.postUser(account).then(this.props.history.push('/DisplayBlog'))
        alert("you've created your account")
    }

    login(){
        UserService.retrieveUser(this.state.name).then(this.props.history.push('/DisplayBlog'))
        //alert("Welcome "+ this.state.name)
        
    }
    render() {
        return(
            <div>
                <h1>Create your account or sign in to Post your travels</h1>
                <table id = "welcomeTable">
                    <tr>
                        <td><h3>username:</h3></td>
                        <td><input type = "text" name = "name" placeholder = "username" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><h3>password:</h3></td>
                        <td><input type = "password" name = "password" placeholder = "password" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><button className= "button4" onClick ={this.create}>Subscribe</button></td>
                        <td><button className= "button4" onClick ={this.login}>Login</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default UserAccount;
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import DisplayComments from '../Comments/DisplayComment'
import AddComponents from '../Comments/AddComment'

import DisplayBlogs from '../MainBlogs/DisplayBlogs'
import AddBlogs from '../MainBlogs/AddBlog'
import UpdateBlogs from '../MainBlogs/UpdateBlog'
// import updatePicture from '../MainBlogs/uploadPicture'
import User from '../SignIn/UserAccount'

import Welcome from '../Home/Welcome'
import Header from '../Home/Header'

class RouterComponent extends Component {
    render(){
        return(
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path = "/"><Welcome/></Route>
                        <Route path = "/DisplayBlog" component = {DisplayBlogs}></Route>
                        <Route path = "/AddBlog" component = {AddBlogs}></Route>
                        <Route path = "/UpdateBlog/:id/:name/:picture/:date/:description/:like" component = {UpdateBlogs}></Route>
                        {/* /:user_id */}
                        {/* <Route path = "/uploadPicture/:id/:name/:picture/:date/:description/:like" component = {updatePicture}></Route> */}
                        <Route path = "/DisplayComment" component = {DisplayComments}></Route>
                        <Route path = "/AddComment" component = {AddComponents}></Route>
                        
                        <Route path = "/Account" component = {User}></Route>
                    </Switch>
                
            </Router>
        )
    }
    
}
export default RouterComponent;
import React, {Component} from 'react'
import {BroswerRouter as Router, Route, Switch} from 'react-router-dom'
import DisplayComments from '../Comments/DisplayComment'
import AddComponents from '../Comments/AddComment'

import DisplayBlogs from '../MainBlogs/DisplayBlogs'
import AddBlogs from '../MainBlogs/AddBlog'
import UpdateBlogs from '../MainBlogs/UpdateBlog'

import Welcome from '../Home/Welcome'
import Header from '../Home/Header'

class RouterComponent extends Component{
    render(){
        return(
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path = "/"><Welcome></Welcome></Route>
                        <Route path = "/DisplayBlog" component = {DisplayBlogs}></Route>
                        <Route path = "/AddBlog" component = {AddBlogs}></Route>
                        <Route path = "/UpdateBlog" component = {UpdateBlogs}></Route>

                        <Route path = "/DisplayComment" component = {DisplayComments}></Route>
                        <Route path = "/AddComment" component = {AddComponents}></Route>
                        
                        
                    </Switch>
                
            </Router>
        )
    }
}
export default RouterComponent;
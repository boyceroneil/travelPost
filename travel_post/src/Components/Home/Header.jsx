import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header>
<nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">MainPage</Link></li>
                        <li><Link className="nav-link" to="/DisplayBlog">Display Blog</Link></li>
                        <li><Link className="nav-link" to="/AddBlog">Add Blog</Link></li>
                        <li><Link className="nav-link" to="/UpdateBlog">Update Blog</Link></li>
                        {/* <li><Link className="nav-link" to="/SearchDvd">Search Dvds</Link></li> */}
                        
                    
                        
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;
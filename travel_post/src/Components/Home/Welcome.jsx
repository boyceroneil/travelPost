import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Welcome extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
           <div>
               <h1>Post your travel adventure for the world to see</h1>
            <div>

               {/* <h3><a href="http://localhost/login1.php">Sign in Here</a></h3>
               <h3> Create an account <Link to= "/Signin">here</Link></h3> */}
            </div>
           </div> 
        )
    }
}
export default Welcome;
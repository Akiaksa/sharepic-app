import React, { Component } from 'react'
import '../Login/Login.css';

class SignIn
 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <input className='textDetails' type="text" placeholder='Username'></input>
                <input className='textDetails' type="password" placeholder='password'></input>
                <button className='SignInButton'>Sign In</button>

            </div>
         );
    }
}
 
export default SignIn;
import React, { Component } from 'react'
class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <input className='textDetails' type="text" placeholder='Mobile Number or email'></input>
                <input className='textDetails' type="text" placeholder='Full Name'></input>
                <input className='textDetails' type="text" placeholder='Username'></input>
                <input className='textDetails' type="password" placeholder='password'></input>
                <button className='SignInButton'>Sign Up</button>
            </div>
         );
    }
}
 
export default SignUp;
import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import inst_image from '../../Images/share_img.JPG';
import caption_img from '../../Images/share_piclogo.JPG';
import './Login.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin : true
        }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else    
            this.setState({isLogin: true});
    }

    state = {  }
    render() { 

        return ( 
            <div>
                {/* containerising the page */}
                <Grid container>
                    {/*3 grid tags divides the page into 3 sections - while dividing make sure the total comes to 12 */}
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        {/*//diving this into 2 sections */}
                        <div className='LoginPage'>
                            <div className='LeftImage'>
                                <img src= {inst_image} width = "300px" />
                            </div>
                            <div>
                                <div className='LoginDetails'>
                                    <img  className='app_logo' src= {caption_img} width = "200px" />
                                    <div className='SignIn'>
                                     {
                                        this.state.isLogin ? <SignIn/> : <SignUp/>
                                     }
                                        
                                    </div>
                                </div>
                                <div className='SignUp'>
                                    {
                                        this.state.isLogin ?
                                        <div className='SignInOption'>Have an account?<span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign Up</span>  </div>
                                        :
                                        <div className='SignUpOption'>Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign In</span> </div>

                                    }
                                    
                                    
                                </div>
                            </div>
                            
                            


                            
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Login;
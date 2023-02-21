import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import NavBar from '../NavBar/NavBar';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                 {/* containerising the page */}
                 <NavBar/>
                 <Grid container>
                    <div>
                        <NavBar></NavBar>
                    </div>
                    <div></div>
                </Grid>
            </div>
         );
    }
}
 
export default Home;
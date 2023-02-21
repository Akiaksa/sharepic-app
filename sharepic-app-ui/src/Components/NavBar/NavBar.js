import React, { Component } from 'react'
import Grid from '@mui/material/Grid';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid className='NavBarStyling' container>
                    <Grid item xs={3}>Hello</Grid>
                    <Grid item xs={3}>World</Grid>
                    <Grid item xs={3}>C</Grid>
                    <Grid item xs={3}>u</Grid>
                </Grid>
            </div>
         );
    }
}
 
export default NavBar;
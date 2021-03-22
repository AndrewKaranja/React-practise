import React from 'react'
import '../styles/LandingPage.css';
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { PlayCircleFilledWhite } from '@material-ui/icons';
import logo from '../qrimage.png';

const useStyles=makeStyles((theme)=>({
root:{
    flexGrow:1,
},
menuLogo:{
    maxWidth: 40,
    marginRight:theme.spacing(2)
},
title:{
    flexGrow:1,
},
authButton:{
    margin:theme.spacing(1),
    


},
}));

function LandingPage(){
    const classes=useStyles();
    return (
        <div className="LandingPage">
            <div className={classes.root}>
            <AppBar position="static" color="#fff">
                <Toolbar>
                        <img src={logo} alt="logo" className={classes.menuLogo}/>
                    
                    
                    <Typography variant="h6" className={classes.title}>
                        Tukyio
                    </Typography>
                    <Button variant="outlined"  color="inherit"  className={classes.authButton}>Login</Button>
                    <Button variant="contained"  color="primary"  className={classes.authButton}>Register</Button>
                </Toolbar>
            </AppBar>
            </div>
        </div>
    )
}

export default LandingPage

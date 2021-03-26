import React from 'react'
import '../styles/LandingPage.css';
import {makeStyles} from '@material-ui/core/styles'

import logo from '../qrimage.png';
import ankara from '../ankarapattern.png';
import landingImg from '../musicbird.svg'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button'


import wallpaper from '../wallpaper03.png';
import Card from '@material-ui/core/Card' 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const navtheme= createMuiTheme({
    typography: {
     "fontFamily": `"Roboto", "Helvetica", "Arial","Montserrat" ,sans-serif`,
     "fontSize": 14,
     "fontWeightBold":600,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });

 const handleClick=()=>{
     console.log('Login')
 }

const useStyles=makeStyles((theme)=>({
nav:{
    flexGrow:1,
    backgroundImage:  `url(${ankara})`,
    color:'#fff',
    padding:theme.spacing(1),
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
    fontStyle:'bold',
    fontSize:18,
    },
intro:{
    backgroundImage:  `url(${wallpaper})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
},
paperContainer: {
    backgroundImage: `url(${wallpaper})`
},
LandingImg: {
height:30,
width:30,
},
description:{
    color:"#ffffff",
    marginBottom:10,
    fontFamily: 'Kiwi Maru',
}
}));

function LandingPage(){
    const title='Tukio';
    const landingText='Tukiyo is an app that lets you connect with art around you';
    const classes=useStyles();
    return (
        <div className="LandingPage">
        <ThemeProvider theme={navtheme}>
            <AppBar position="static" color="#000000" className={classes.nav}>
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.menuLogo}/>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Button variant="outlined"  color="inherit"  className={classes.authButton} onClick={handleClick}>Login</Button>
                    <Button variant="contained"  color="primary"  className={classes.authButton}>Register</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
            
      
        <Grid container className="GetStarted" height='100%'> 
                <Grid item xs={12} sm={6}>
                   <Grid sm={12}>
                       <Typography  variant="h4"  className={classes.description} >
                           Welcome to Tukio
                        </Typography>
                    </Grid>
                    <Grid sm={12} >
                       <Typography variant="h6" style={{marginBottom:10}}>
                        {landingText}
                       </Typography>
                    </Grid>
                    <Grid sm={12}><Button variant="outlined" style={{fontStyle:'bold'}}>Get Started</Button></Grid>
                </Grid>

                <Grid container xs={12} sm={6} alignItems="center" justify="center" >
                  <img src={landingImg} classname={classes.LandingImg} alt="monsterartist" />
               </Grid>
        </Grid>

          
        
           
</div>
    )
}

export default LandingPage

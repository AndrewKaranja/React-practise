import React from 'react'
import '../styles/LandingPage.css';
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import logo from '../qrimage.png';
import wallpaper from '../wallpaper03.png';
import Card from '@material-ui/core/Card' 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

const useStyles=makeStyles((theme)=>({
nav:{
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
intro:{
    backgroundImage:  `url(${wallpaper})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
},
paperContainer: {
    backgroundImage: `url(${wallpaper})`
}
}));

function LandingPage(){
    const title='Tukio';
    const classes=useStyles();
    return (
        <div className="LandingPage">
            <div className={classes.nav}>
            <AppBar position="static" color="#000000" background="#000">
                <Toolbar>
                        <img src={logo} alt="logo" className={classes.menuLogo}/>
                    
                
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Button variant="outlined"  color="inherit"  className={classes.authButton}>Login</Button>
                    <Button variant="contained"  color="primary"  className={classes.authButton}>Register</Button>
                </Toolbar>
            </AppBar>
            </div>
      
           <div className="GetStarted">
<Typography  variant="h5">Tukiyo is an app that lets you connect with art around you</Typography>
<Button variant="contained">Get Started</Button>
           </div>
        
           
</div>
    )
}

export default LandingPage

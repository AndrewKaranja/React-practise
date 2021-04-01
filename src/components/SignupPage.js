import React from 'react';
import '../styles/SignupPage.css';
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card' 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const useStyles=makeStyles((theme)=>({
    Root:{
        backgroundColor:"#f4a261",
        padding:theme.spacing(3),
    },
    MainGrid:{
        borderRadius:'100px',
    }
    }));

const SignupPage = () => {
    const classes=useStyles();
    return (
        <div>
            <Paper className={classes.Root}>
              <Grid className={classes.MainGrid}>
                  <Grid>
                      <Typography>
                          Get started
                      </Typography>
                      <Typography>
                          already have an account?
                      </Typography>
                      <a>Sign in</a>
                  </Grid>
                  <Grid>
                      <img></img>
                  </Grid>


              </Grid>

            </Paper>
            </div>
    )
}

export default SignupPage

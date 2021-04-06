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
import TextField from './TextField'
import signupAnim from '../images/usersignup.gif'

import {useField,Formik,Form} from 'formik'


const useStyles=makeStyles((theme)=>({
    Root:{
        backgroundColor:"#f4a261",
        height:'100vh',
        padding:theme.spacing(5),
    },
    MainGrid:{
        borderRadius:'20px',
        backgroundColor:'#fff',
        minHeight:'80vh',
        margin:theme.spacing(3),
        padding:theme.spacing(3),
    }
    }));



const SignupPage = () => {
    const classes=useStyles();
    return (
        <div>
            <Paper className={classes.Root}>
              <Grid className={classes.MainGrid}  container direction="row">
                  <Grid item xs={12} sm={6}>
                  
                      <Formik
                      initialValues={{
                          fname:'',
                          lname:'',
                          username:'',
                          email:'',
                          password:'',
                          confirmPassword:''

                      }}>
                          {formik=>(
                              <div>
                                  <h1>Get Started</h1>
                                  <Form>
                                      <TextField label="First Name" name="fname" type="text"/>

                                  </Form>

                              </div>
                          )}

                      </Formik>
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center"
  alignItems="center">
                 <img src={signupAnim} height="400px" width="400px" alt="signup" />

                  </Grid>
                 


              </Grid>

            </Paper>
            </div>
    )
}

export default SignupPage

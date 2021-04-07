import React from 'react';
import '../styles/SignupPage.css';
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card' 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import TextField from './TextField'
import signupAnim from '../images/usersignup.gif'

import {useField,Formik,Form} from 'formik'



const useStyles=makeStyles((theme)=>({
    Root:{
        backgroundColor:"#fce3c5",
        height:'100vh',
        width:'100vw',
        padding:theme.spacing(5),
    },
    MainGrid:{
        borderRadius:'20px',
        backgroundColor:'#fff',
        minHeight:'80vh',
        minWidth:'70vw',
        maxWidth:'70vw',
        position:'absolute',
        left:'50%',
        top:'50%',
        transform:'translate(-50%,-50%)',
        padding:theme.spacing(4),
    },
    SignFormGrid:{
        padding:theme.spacing(1),
    }
    }));



const SignupPage = () => {
    const classes=useStyles();
    return (
        <div>
            <Paper className={classes.Root}>
              <Grid className={classes.MainGrid}  container direction="row">
                  <Grid item xs={12} sm={6} className={classes.SignFormGrid}>
                  
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
                                      <TextField label="Last Name" name="lname" type="text"/>
                                      <TextField label="Username" name="username" type="text"/>
                                      <TextField label="Email" name="email" type="text"/>
                                      <TextField label="Password" name="passw" type="text"/>
                                      <TextField label="Confirm Password" name="confirmpassw" type="text"/>

                                  </Form>

                                  

                              </div>
                          )}
                          </Formik>
                          <Button variant="contained"  color="primary"  className={classes.authButton}>Create Account</Button>
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center"
  className="gridImgSignup" >
                 <img src={signupAnim} height="400px" width="400px" alt="signup" className="imgSignup"/>

                  </Grid>
                 


              </Grid>

            </Paper>
            </div>
    )
}

export default SignupPage

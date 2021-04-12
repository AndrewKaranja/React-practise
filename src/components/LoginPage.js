import React from 'react'
import '../styles/SignupPage.css';
import {makeStyles} from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import TextField from './TextField'
import LoginAnim from '../images/usersignup.gif'
import * as Yup from 'yup';

import Link from '@material-ui/core/Link';

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
    LoginFormGrid:{
        padding:theme.spacing(1),
    }
    }));

function LoginPage() {
    const classes=useStyles();

    const validate=Yup.object({
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password:Yup.string()
        .min(6,'Password must be at least 6 characters')
        .required('Password is required'),
        
      })


    return (
        <div>

<Paper className={classes.Root}>
              <Grid className={classes.MainGrid}  container direction="row">
                  <Grid item xs={12} sm={6} className={classes.LoginFormGrid}>
                  <h2>Welcome Back</h2>
                  <Typography variant="caption">Don't have an account? <Link href="#">Sign up</Link>
                       </Typography>
                  <div id="gSignInWrapper">
    <span className="label">Sign in with:</span>
    <div id="customBtn" className="customGPlusSignIn">
      <span className="icon">
      
      </span>
      <span className="buttonText">Google</span>
    </div>
  </div>
                 
  <br/> 

<Divider variant="middle" />
<br/>
                      <Formik
                      
                      initialValues={{
                          email:'',
                          password:'',

                      }}
                      validationSchema={validate}
                          onSubmit={(values,{setSubmitting,resetForm})=>{
                              setTimeout(()=>{
                                  alert(JSON.stringify(values,null,2));
                                  resetForm();
                                  setSubmitting(false);
                              },3000)
                          }}>
                          {formik=>(
                              <div>
                                  
                                  <Form>
                                      <TextField label="Email" name="email" type="email"/>
                                      <TextField label="Password" name="password" type="password"/>
                                      <Button variant="contained"  color="primary"  className={classes.SignupButton} type="submit">{formik.isSubmitting ?'Loading...' : 'Log into Account'}</Button>

                                  </Form>

                                  

                              </div>
                          )}
                          </Formik>
                          
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center"
  className="gridImgSignup" >
                 <img src={LoginAnim} height="400px" width="400px" alt="signup" className="imgSignup"/>

                  </Grid>
                 


              </Grid>

            </Paper>
            
        </div>
    )
}

export default LoginPage

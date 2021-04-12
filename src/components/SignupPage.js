import React from 'react';
import signupAnim from '../images/usersignup.gif';

import '../styles/SignupPage.css';
import {makeStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import TextField from './TextField'

import {ErrorMessage,useField,Formik,Form} from 'formik';
import * as Yup from 'yup';




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

const label = (
        <Typography variant="caption">By Creating an account, you agree to our
                   <Link href="#">Privacy Policy</Link>,<Link href="#">
                    Terms and Conditions</Link> and <Link href="#">Notifications Settings</Link>
        </Typography>
      )

const CustomCheckbox=({children,...props})=> {
        const[field,meta]=useField(props,'checkbox');
        return (
            <>
                 <label className="checkbox" >
                <input type="checkbox" {...field} {...props}></input>
                {children}
                </label>
                {meta.touched && meta.error && 'is-invalid' ?(
                  <div className="error">{meta.error}</div>
                ):null} 
                
            </>
        )
    }


const SignupPage = () => {
    const classes=useStyles();


      const validate=Yup.object({
        fullname:Yup.string()
        .min(3,'Must be atleas 3 characters')
        .max(20,'Must be 20 characters or less')
        .required('Name is required'),
        username:Yup.string()
        .min(3,'Must be atleas 3 characters')
        .max(10,'Must be 10 characters or less')
        .required('Username is required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password:Yup.string()
        .min(6,'Password must be at least 6 characters')
        .required('Password is required'),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must match')
        .required('Required'),
        acceptedTerms:Yup.bool()
        .oneOf([true],'You must accept the terms and conditons')
        .required('Required'),
        
      })

    return (
        <div>
            <Paper className={classes.Root}>
              <Grid className={classes.MainGrid}  container direction="row">
                  <Grid item xs={12} sm={6} className={classes.SignFormGrid}>
                       <h2>Get Started</h2>
                       <Typography variant="caption">Already have an account? <Link href="#">Login</Link>
                       </Typography>
  
                        <div id="gSignInWrapper">
                           <span className="label">Sign up with:</span>
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
                          fullname:'',
                          username:'',
                          email:'',
                          password:'',
                          confirmPassword:'',
                          acceptedTerms:false,
                          }}
                          validationSchema={validate}
                          onSubmit={(values,{setSubmitting,resetForm})=>{
                              setTimeout(()=>{
                                  alert(JSON.stringify(values,null,2));
                                  resetForm();
                                  setSubmitting(false);
                              },3000)
                          }}
                          >

                          {formik=>(
                              <div>
                                  <Form>
                                      <TextField label="Full Name" name="fullname" type="text"/>
                                      <TextField label="Username" name="username" type="text"/>
                                      <TextField label="Email" name="email" type="text"/>
                                      <TextField label="Password" name="password" type="password"/>
                                      <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                                     
                                      <CustomCheckbox name="acceptedTerms">
                                          {label}
                                      </CustomCheckbox>
                                      <Button variant="contained"  color="primary"  className={classes.SignupButton} type="submit">{formik.isSubmitting ?'Loading...' : 'Create Account'}</Button>
                                  </Form>
                                </div>
                          )}
                      </Formik>
                  </Grid>

                  <Grid item xs={12} sm={6} justify="center" className="gridImgSignup">
                       <img src={signupAnim} height="400px" width="400px" alt="signup" className="imgSignup"/>
                  </Grid>


                  
              </Grid>   
            </Paper>
            </div>
    )
}

export default SignupPage

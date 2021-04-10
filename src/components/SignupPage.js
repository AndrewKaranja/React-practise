import React from 'react';
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


    const label = (
        <Typography variant="caption">By Creating an account, you agree to our <Link href="#">
      Privacy Policy
  </Link>,<Link href="#">
      Terms and Conditions
  </Link> and <Link href="#">
  Notifications Settings
  </Link></Typography>
      )



const SignupPage = () => {
    const classes=useStyles();
    const [state, setState] = React.useState({
        checkedA: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div>
            <Paper className={classes.Root}>
              <Grid className={classes.MainGrid}  container direction="row">
                  <Grid item xs={12} sm={6} className={classes.SignFormGrid}>
                  <h2>Get Started</h2>
                  <Typography variant="caption">Already have an account? <Link href="#">
      Login
  </Link></Typography>
  
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
                          confirmPassword:''

                      }}>
                          {formik=>(
                              <div>
                                  
                                  <Form>
                                      <TextField label="Full Name" name="fullname" type="text"/>
                                      <TextField label="Username" name="username" type="text"/>
                                      <TextField label="Email" name="email" type="text"/>
                                      <TextField label="Password" name="passw" type="password"/>
                                      <TextField label="Confirm Password" name="confirmpassw" type="password"/>

                                  </Form>

                                  

                              </div>
                          )}
                          </Formik>

    
         
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center"
  className="gridImgSignup" >
                 <img src={signupAnim} height="400px" width="400px" alt="signup" className="imgSignup"/>

                  </Grid>

                  <Grid item xs={12} sm={12}>
                  <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label={label}
      />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Button variant="contained"  color="primary"  className={classes.SignupButton}>Create Account</Button>
                  </Grid>
                 
                 
  

              </Grid>

            </Paper>
            </div>
    )
}

export default SignupPage

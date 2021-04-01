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

import {useField,Formik,Form} from 'formik'


const useStyles=makeStyles((theme)=>({
    Root:{
        backgroundColor:"#f4a261",
        padding:theme.spacing(3),
    },
    MainGrid:{
        borderRadius:'100px',
    }
    }));

const TextField=({label,...props})=>{
    const[field,meta]=useField(props);
    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input className="form-control shadow-none" autoComplete="off"></input>
        </div>
    )
}

const SignupPage = () => {
    const classes=useStyles();
    return (
        <div>
            <Paper className={classes.Root}>
              <Grid className={classes.MainGrid}>
                  <Grid>
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
                                  <h1 className="GetStarted">Get Started</h1>
                                  <Form>
                                      <TextField label="First Name" name="fname" type="text"/>

                                  </Form>

                              </div>
                          )}

                      </Formik>
                  </Grid>
                  <Grid>
                  </Grid>


              </Grid>

            </Paper>
            </div>
    )
}

export default SignupPage

import React, { Component } from 'react'
import { Button, TextField, FormControl, Grid, Typography, Link, Container } from '@material-ui/core';
export default class Form extends Component{
    state={
        data:{
            email:"",
            password:""
        },
        errors:{
            email:"",
            password:""
        },
        
    }
    handleChange=name=>({target:{value}})=>{
        this.setState({
            data:{
                ...this.state.data,
                [name]:value
            }
        })
    }
    isDisabled=name=>{//validation
        const errors=this.state.errors;
        const data=this.state.data
        const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        switch(name){
            case "password":
                errors.password=data.password.length<8?"Password must be at least 8 characters long":"";
                break;
            case "email":
                errors.email=data.email.length===0||!emailRegex.test(data.email)?"Invalid Email":"";
                break;
            default:
                break;
        }
        this.setState({
            ...this.state,
            errors
        })
    }
    handleSubmit=()=>{
        //to do
    }
    render(){
        const {email,password} =this.state.data
        return(
            <Container maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <FormControl style={{margin:10}}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    value={email}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    onChange={this.handleChange('email')}
                                    error={this.state.errors.email.length===0?false:true}
                                    helperText={this.state.errors.email}
                                    onBlur={()=>this.isDisabled("email")}
                                    autoComplete="email"
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <br/>
                                <TextField
                                    id="password"
                                    label="Password"
                                    placeholder="At least 8 characters long"
                                    value={password}
                                    required
                                    variant="outlined"
                                    fullWidth
                                    onChange={this.handleChange('password')}
                                    error={this.state.errors.password.length===0?false:true}
                                    helperText={this.state.errors.password}
                                    onBlur={()=>this.isDisabled("password")}
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <Button className=".zoom" type="submit" variant="contained" color="primary" component="span" >
                            Submit
                        </Button>
                        <Grid container>
                            <Grid item xs alignContent="flex-start">
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </form>
            </Container>
        )
    }
}

import React, { Component, Fragment } from 'react'
import { Button, TextField, MenuItem, FormControl, Grid } from '@material-ui/core';
export default class Form extends Component{
    state={
        data:{
            firstName:"",
            lastName:"",
            email:"",
            college:"IIT Delhi",
            otherCollege:"",
            phoneNumber:"",
            gender:"Male",
            password:""
        },
        errors:{
            firstName:"",
            lastName:"",
            email:"",
            otherCollege:"",
            phoneNumber:"",
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
        const phoneRegex=/^([+]\d{2})?\d{10}$/;
        switch(name){
            case "firstName":
                errors.firstName=data.firstName.length===0?"Please Enter your Name":"";
                break;
            case "lastName":
                errors.lastName=data.lastName.length===0?"Please Enter your Name":"";
                break;
            case "password":
                errors.password=data.password.length<8?"Password must be at least 8 characters long":"";
                break;
            case "otherCollege":
                errors.otherCollege=data.otherCollege.length===0?"Please enter your College":"";
                break;
            case "email":
                errors.email=data.email.length===0||!emailRegex.test(data.email)?"Invalid Email":"";
                break;
            case "phoneNumber":
                errors.phoneNumber=!phoneRegex.test(data.phoneNumber)?"Invalid Mobile Number":"";
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
        //To be specified

    }
    render(){
        const {firstName,lastName,email,college,otherCollege,phoneNumber,gender,password} =this.state.data
        const gender_select=[ 
            {value:"Male"},
            {value: 'Female'},
            {value:"other"} 
        ];
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <FormControl style={{margin:10,width:300}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    label="First Name"
                                    value={firstName}
                                    onChange={this.handleChange('firstName')}
                                    error={this.state.errors.firstName.length===0?false:true}
                                    helperText={this.state.errors.firstName}
                                    onBlur={()=>this.isDisabled("firstName")}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    label="Last Name"
                                    value={lastName}
                                    onChange={this.handleChange('lastName')}
                                    error={this.state.errors.lastName.length===0?false:true}
                                    helperText={this.state.errors.lastName}
                                    onBlur={()=>this.isDisabled("lastName")}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email Address"
                                    value={email}
                                    required
                                    fullWidth
                                    onChange={this.handleChange('email')}
                                    error={this.state.errors.email.length===0?false:true}
                                    helperText={this.state.errors.email}
                                    onBlur={()=>this.isDisabled("email")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Mobile Number"
                                    required
                                    fullWidth
                                    value={phoneNumber}
                                    onChange={this.handleChange('phoneNumber')}
                                    error={this.state.errors.phoneNumber.length===0?false:true}
                                    helperText={this.state.errors.phoneNumber}
                                    onBlur={()=>this.isDisabled("phoneNumber")}
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Gender"
                                    variant="filled"
                                    required
                                    select
                                    fullWidth
                                    value={gender}
                                    onChange={this.handleChange('gender')}
                                >
                                    {gender_select.map( option=>(
                                        <MenuItem value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="College"
                                    select
                                    required
                                    variant="filled"
                                    value={college}
                                    fullWidth
                                    onChange={this.handleChange('college')}
                                >
                                    <MenuItem value="IIT Delhi"> IIT Delhi</MenuItem>
                                    <MenuItem value="other"> other</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                        {college==="other"
                            ?<Fragment>
                                <TextField
                                    required
                                    label="College"
                                    value={otherCollege}
                                    onChange={this.handleChange('otherCollege')}
                                    error={this.state.errors.otherCollege.length===0?false:true}
                                    helperText={this.state.errors.otherCollege}
                                    onBlur={()=>{this.isDisabled("otherCollege")}}
                            
                                />
                            </Fragment>
                            :null
                        }
                        
                        <TextField
                            label="Password"
                            placeholder="At least 8 characters long"
                            value={password}
                            required
                            onChange={this.handleChange('password')}
                            error={this.state.errors.password.length===0?false:true}
                            helperText={this.state.errors.password}
                            onBlur={()=>this.isDisabled("password")}
                            type="password"
                        />
                        <br/>
                        <Button className=".zoom" type="submit" variant="contained" color="primary" component="span" >
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Fragment>
        )
    }
}
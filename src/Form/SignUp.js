import React, { Component, Fragment, useState } from 'react'
import { Button, TextField, MenuItem, FormControl, Grid, Typography, Link, Container, makeStyles } from '@material-ui/core';

const useStyle = makeStyles (() => ({
    overlay:{
        position: 'relative',
    },
    div:{
        position:"absolute",
        right:0,
        left:0,
        height:"100%",
        backgroundColor:"#D5D3D6",
        backgroundSize:"cover"
    },
    input:{
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #D5D3D6 inset"
        }
    }
}))

export default function SignUp(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [college,setCollege]=useState("IIT Delhi");
    const [otherCollege,setOtherCollege]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [gender,setGender]=useState("");
    
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [firstNameError,setFirstNameError]=useState("");
    const [lastNameError,setLastNameError]=useState("");
    const [otherCollegeError,setOtherCollegeError]=useState("");
    const [phoneNumberError,setPhoneNumberError]=useState("");
    const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phoneRegex=/^([+]\d{2})?\d{10}$/;
    const handleSubmit=()=>{
        //To be specified

    }
    const gender_select=[ 
        {value:"Male"},
        {value: 'Female'},
        {value:"other"} 
    ];
    const classes=useStyle();
    return(
        <div className={classes.div}>
            <Container maxWidth="sm" className={classes.overlay}>
                <Typography component="h1" variant="h3">
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl style={{margin:20}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="First Name"
                                    value={firstName}
                                    onChange={e=>setFirstName(e.target.value)}
                                    error={firstNameError.length===0?false:true}
                                    helperText={firstNameError}
                                    onBlur={()=>setFirstNameError(firstName.length===0?"Please Enter your Name":"")}
                                    inputProps={{ className: classes.input }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    inputProps={{ className: classes.input }}
                                    variant="outlined"
                                    label="Last Name"
                                    value={lastName}
                                    onChange={e=>setLastName(e.target.value)}
                                    error={lastNameError.length===0?false:true}
                                    helperText={lastNameError}
                                    onBlur={()=>setLastNameError(lastName.length===0?"Please Enter your Name":"")}
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    inputProps={{ className: classes.input }}
                                    label="Email Address"
                                    value={email}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    onChange={e=>setEmail(e.target.value)}
                                    error={emailError.length===0?false:true}
                                    helperText={emailError}
                                    onBlur={()=>{setEmailError(email.length===0||!emailRegex.test(email)?"Invalid Email":"")}}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} style={{marginTop:20}}>
                                <TextField
                                    label="Mobile Number"
                                    inputProps={{ className: classes.input }}
                                    required
                                    variant="outlined"
                                    fullWidth
                                    value={phoneNumber}
                                    onChange={e=>setPhoneNumber(e.target.value)}
                                    error={phoneNumberError.length===0?false:true}
                                    helperText={phoneNumberError}
                                    onBlur={()=>setPhoneNumberError(!phoneRegex.test(phoneNumber)?"Invalid Mobile Number":"")}
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
                                    onChange={e=>setGender(e.target.value)}
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
                                    onChange={e=>setCollege(e.target.value)}
                                >
                                    <MenuItem value="IIT Delhi"> IIT Delhi</MenuItem>
                                    <MenuItem value="other"> other</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                        <br/>
                        {college==="other"
                            ?<Fragment>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="College"
                                    inputProps={{ className: classes.input }}
                                    value={otherCollege}
                                    onChange={e=>setOtherCollege(e.target.value)}
                                    error={otherCollegeError.length===0?false:true}
                                    helperText={otherCollegeError}
                                    onBlur={()=>setOtherCollegeError(otherCollege.length===0?"Please enter your College":"")}
                            
                                />
                                <br/>
                            </Fragment>
                            :null
                        }
                        <TextField
                            label="Password"
                            placeholder="At least 8 characters long"
                            inputProps={{ className: classes.input }}
                            value={password}
                            required
                            variant="outlined"
                            fullWidth
                            onChange={e=>setPassword(e.target.value)}
                            error={passwordError.length===0?false:true}
                            helperText={passwordError}
                            onBlur={()=>setPasswordError(password.length<8?"Password must be at least 8 characters long":"")}
                            type="password"
                            autoComplete="current-password"
                        />
                        <br/>
                        <Button type="submit" variant="contained" color="primary" component="span" >
                            Submit
                        </Button>
                        <br/>
                        <Grid container>
                            <Grid item xs >
                                <Link href="#" variant="body2">
                                    Already a User? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}
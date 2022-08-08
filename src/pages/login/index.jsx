import React, {Component, useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Navigate} from "react-router";

function Login(props) {
    const [islLogin,setLogin]=useState(false)
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {classes}=props;



    //const { classes } = this.props;
    return (

        islLogin ? <Navigate to="/home" replace={true}/> :

            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic15"
                            label="User name"
                            variant="outlined"
                            onChange={(e) =>{
                                setUserName(e.target.value)
                            }}
                        />
                        <TextField
                            id="outlined-basic16"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e) =>{
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <Button
                            onClick={() =>{
                                props.setLogged();
                                setLogin(true)
                            }}
                            variant="contained" type="submit" className="primary">Login</Button>
                    </div>
                    <Typography variant="h5" style={{ marginTop: "-30px"}}>Create new user
                        account? </Typography>

                </div>
            </div>
        )

}
export default withStyles(styleSheet)(Login)
import React, { Component, Fragment } from "react";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button, Grid, Typography} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';


class CustomerManage extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            formData: {
                id: '',
                name: '',
                address: '',
                salary: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }*/
    }

    render() {
        return (
             <>

                <ValidatorForm ref="form" className="pt-2" >
                    <Grid container className="pt-2" spacing={2}>
                        <Grid item lg={12} xs={6} sm={12} md={12}>
                            <Typography variant="h4" style={{background:'#1f4037',color: 'white',margin:'14px'}}><b>User Registration</b></Typography>
                        </Grid>

                        <Grid container direction="row" justify="flex-end" spacing={2} alignItems="center" style={{margin:'30px',background:'white',boxShadow:'0.4px 1px 2px 3px'}}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>First Name</b></Typography>
                                <TextValidator
                                    id="outlinedbasic1"
                                    placeholder="First Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Last Name</b></Typography>
                                <TextValidator
                                    id="outlinedbasic2"
                                    placeholder="Last Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Email</b></Typography>
                                <TextValidator
                                    id="outlinedbasic3"
                                    placeholder="Email"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>User Name</b></Typography>
                                <TextValidator
                                    id="outlinedbasic4"
                                    placeholder="User Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Password</b></Typography>
                                <TextValidator
                                    id="outlinedbasic5"
                                    placeholder="Password"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>City</b></Typography>
                                <TextValidator
                                    id="outlinedbasic6"
                                    placeholder="City"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Street</b></Typography>
                                <TextValidator
                                    id="outlinedbasic7"
                                    placeholder="Street"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Street No</b></Typography>
                                <TextValidator
                                    id="outlinedbasic8"
                                    placeholder="Street No"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Zip Code</b></Typography>
                                <TextValidator
                                    id="outlinedbasic9"
                                    placeholder="Zip Code"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Lat Value</b></Typography>
                                <TextValidator
                                    id="outlinedbasic10"
                                    placeholder="Lat Value"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Long Value</b></Typography>
                                <TextValidator
                                    id="outlinedbasic11"
                                    placeholder="Long Value"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Mobile No</b></Typography>
                                <TextValidator
                                    id="outlinedbasic12"
                                    placeholder="Mobile No"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </ValidatorForm>


                 <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end"
                       alignItems="flex-end" direction="row" ontainer marginTop={"10px"}>
                     <Button size="large" variant="contained" color={"warning"}
                             style={{marginRight: "70px",height:'34px',width:'150px'}}>Clear</Button>
                     <Button size="large" variant="contained" style={{marginRight: "50px",height:'34px',width:'150px'}}>Save</Button>
                 </Grid>


                 <Grid container direction="column" justify="flex-end" alignItems="center">
                     <Grid contaner style={{ marginTop: '20px', }}>
                         <TableContainer component={Paper}>
                             <Table sx={{ minWidth: 1500 }} aria-label="customer table">
                                 <TableHead style={{background:'gray'}}>
                                     <TableRow>
                                         <TableCell align="left"><b>First Name</b></TableCell>
                                         <TableCell align="left"><b>Last Name</b></TableCell>
                                         <TableCell align="left"><b>Email</b></TableCell>
                                         <TableCell align="left"><b>User Name</b></TableCell>
                                         <TableCell align="left"><b>Password</b></TableCell>
                                         <TableCell align="left"><b>City</b></TableCell>
                                         <TableCell align="left"><b>Street</b></TableCell>
                                         <TableCell align="left"><b>Street No</b></TableCell>
                                         <TableCell align="left"><b>Zip Code</b></TableCell>
                                         <TableCell align="left"><b>Lat Value</b></TableCell>
                                         <TableCell align="left"><b>Long Value</b></TableCell>
                                         <TableCell align="left"><b>Mobile No</b></TableCell>
                                     </TableRow>
                                 </TableHead>
                                 <TableBody>
                                     {/*{
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.salary}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">

                                                </Tooltip>
                                                <Tooltip title="Delete">


                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }*/}
                                 </TableBody>
                             </Table>
                         </TableContainer>
                     </Grid>
                 </Grid>


             </>
        )
    }
}
export default withStyles(styleSheet) (CustomerManage);
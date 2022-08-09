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

class CartManage extends Component {
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
                            <Typography variant="h4" style={{background:'#1f4037',color: 'white',margin:'14px'}}><b>Cart Manage</b></Typography>
                        </Grid>

                        <Grid container direction="row" justify="flex-end" spacing={2} alignItems="center" style={{margin:'30px',background:'white',boxShadow:'0.4px 1px 2px 3px'}}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>User Name</b></Typography>
                                <TextValidator
                                    id="outlinedbasic22"
                                    placeholder="User Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Date</b></Typography>
                                <TextValidator
                                    id="outlinedbasic23"
                                    placeholder="Date"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Product Title</b></Typography>
                                <TextValidator
                                    id="outlinedbasic24"
                                    placeholder="Product Title"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography variant="subtitle1"><b>Qty</b></Typography>
                                <TextValidator
                                    id="outlinedbasic25"
                                    placeholder="Qty"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </ValidatorForm>

                <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex',marginTop:'350px'}} justifyContent="flex-end"
                      alignItems="flex-end" direction="row" ontainer marginTop={"10px"}>
                    <Button size="large" variant="contained" color={"warning"}
                            style={{marginRight: "70px",height:'34px',width:'150px'}}>Clear</Button>
                    <Button size="large" variant="contained" style={{marginRight: "50px",height:'34px',width:'150px'}}>Save</Button>
                </Grid>

            </>
        )
    }
}
export default withStyles(styleSheet) (CartManage);
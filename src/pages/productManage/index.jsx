import React, {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Grid, Typography} from "@mui/material";
import {Button} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

class ProductManage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            alert: false,
            message: '',
            severity: '',
            top100Films: [
                {title: 'The Shawshank Redemption', year: 1994},
                {title: 'The Godfather', year: 1972},
                {title: 'The Godfather: Part II', year: 1974},
                {title: 'The Dark Knight', year: 2008},
                {title: '12 Angry Men', year: 1957},
                {title: "Schindler's List", year: 1993},
                {title: 'Pulp Fiction', year: 1994}
            ],
        }
    }

    render() {
        return (
            <>
                <ValidatorForm ref="form">
                    <Grid container spacing={1}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h4" style={{background: '#1f4037', color: 'white',margin:'20px'}}><b>Product
                                Manage</b></Typography>
                        </Grid>
                        <Grid container direction="row" justify="flex-end" spacing={2} alignItems="center"
                              style={{margin: '30px', background: 'white', boxShadow: '0.4px 1px 2px 3px'}}>

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography variant="body1"><h3>Title</h3></Typography>
                                <TextValidator
                                    id="outlined-basic13"
                                    placeholder="Title"
                                    variant="outlined"
                                    size="small"
                                    style={{width: '100%'}}
                                    validators={['required']}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography variant="body1"><h3>Price</h3></Typography>
                                <TextValidator
                                    id="outlined-basic14"
                                    placeholder="Price"
                                    variant="outlined"
                                    size="small"
                                    style={{width: '100%'}}
                                    validators={['required']}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography variant="body1"><h3>Category</h3></Typography>
                                <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={this.state.top100Films}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.title}
                                    renderOption={(props, option, {selected}) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={this.state.icon}
                                                checkedIcon={this.state.checkedIcon}
                                                style={{marginRight: 8}}
                                                checked={selected}
                                            />
                                            {option.title}
                                        </li>
                                    )}
                                    style={{width: 500}}
                                    renderInput={(params) => (
                                        <TextField {...params} style={{width: "100%"}}/>
                                    )}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography variant="body1"><h3>Description</h3></Typography>
                                <TextValidator
                                    placeholder="Description"
                                    variant="outlined"
                                    size="large"
                                    style={{width: '100%'}}
                                    validators={['required']}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex',marginTop:'270px'}} justifyContent="flex-end"
                          alignItems="flex-end" direction="row" ontainer marginTop={"10px"}>
                        <Button size="large" variant="contained" color={"warning"}
                                style={{marginRight: "70px",height:'34px',width:'150px'}}>Clear</Button>
                        <Button size="large" variant="contained" style={{marginRight: "50px",height:'34px',width:'150px'}}>Save</Button>
                    </Grid>

                </ValidatorForm>
            </>
        );
    }
}

export default ProductManage

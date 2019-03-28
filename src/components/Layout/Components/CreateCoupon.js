import React, { Component, Fragment } from "react";

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme =>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
    title: {
        margin: '0 10px',
        padding: '10px 0',
    },
    inputLabel: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: '2rem',
        
    },
    input: {
        display: 'block',
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
        flexDirection: 'row',
      },
  });

class Customer extends Component {
    
  render() {

    const { classes } = this.props;


    return (
        <Fragment>
            <Typography variant="h5" component="h2" className={classes.title}>
                Create Coupon
            </Typography>

            
                    <div className={classes.inputLabel}>
                            <InputLabel className={classes.input} htmlFor="name">Name</InputLabel>
                            <TextField
                                id="name"
                                variant="outlined"
                            />
                    </div>

                    <div className={classes.textField}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Discount Types</FormLabel>
                            <RadioGroup
                                aria-label="Discount Types"
                                name="discount"
                                className={classes.group}
                            >
                                <FormControlLabel value="percent" control={<Radio />} label="Percent Off" />
                                <FormControlLabel value="unit" control={<Radio />} label="Amount of unit" />
                                <FormControlLabel value="product" control={<Radio />} label="Amount of product" />
                                <FormControlLabel value="free" control={<Radio />} label="Free" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className={classes.inputLabel}>
                            <InputLabel className={classes.input} htmlFor="percent">Amount Percent Off</InputLabel>
                            <TextField
                                id="percent"
                                variant="outlined"
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                            />
                    </div>

                    <div className={classes.inputLabel}>
                            <InputLabel className={classes.input} htmlFor="condition">Conditions</InputLabel>
                            <TextField
                                id="condition"
                                variant="outlined"
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">points</InputAdornment>,
                                }}
                            />
                    </div>

                    <div className={classes.inputLabel}>
                        <Grid container spacing={24}>
                            <Grid item xs={4}>
                                <InputLabel className={classes.input} htmlFor="date-start">Day Start</InputLabel>
                                <TextField
                                    id="date-start"
                                    variant="outlined"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                </Grid>
                                <Grid item xs={4}>
                                    <InputLabel className={classes.input} htmlFor="date-end">Day End</InputLabel>
                                    <TextField
                                        id="date-end"
                                        variant="outlined"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </Grid>
                        </Grid>
                    </div>

                    <div className={classes.inputLabel}>
                            <InputLabel className={classes.input} htmlFor="numcoupon">Number Of Coupons</InputLabel>
                            <TextField
                                id="numcoupon"
                                variant="outlined"
                                type="number"
                                
                            />
                    </div>
                    
                    <div className={classes.inputLabel}>
              
                                <Button variant="contained"  size="large" color="primary" className={classes.button}>
                                    Submit
                                </Button>
                        
                                <Button variant="contained" size="large" color="secondary" className={classes.button}>
                                    Reset
                                </Button>

                    </div>
                    
                    
                    


         

        </Fragment>
    );
    }
  }

  
  export default withStyles(styles)(Customer);

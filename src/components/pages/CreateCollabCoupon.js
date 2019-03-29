import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, InputLabel, TextField, InputAdornment } from '@material-ui/core/';
import createCoupon from '../../graphql/createCoupon'
import createCollabCoupon from '../../graphql/createCollabCoupon'
import getStoreId from '../../graphql/getStoreId'
import { Redirect } from "react-router-dom"
// import fetchData from '../function/fetchDataData'

const styles = theme => ({
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
 
    state = {
        isLogin: true,
        id: "",
        token: "",
        storeId: "", 
        fetched: false,
    }

    componentWillMount() {
        this.setState({collabID: this.props.match.params.collabStores, startDay: this.formatDate()})
        if (sessionStorage.getItem("auth")) {
            this.getUserInfo();
        } else {
            this.setState({ isLogin: false });
        }
    }

    getUserInfo = () => {
        let data = JSON.parse(sessionStorage.getItem("auth"));
        let userInfo = {
            id: data.userId,
            token: data.token,
        }
        this.setState(userInfo);
        this.setState({storeID: this.props.storeid}, () =>{
            console.log(this.state.storeId)
        })
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
        [e.target['name']]: e.target['value']
        })
    }

    handleDate = e => {
        e.preventDefault();
        this.setState({
        [e.target['name']]: new Date(e.target['value']).toISOString()
        })
    }

    formatDate = () => {
        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }


    submitHandler = event => {
        event.preventDefault();

        const { name, description, details, condition, startDay, storeID, token, collabID } = this.state
        
        let requestBody = createCollabCoupon(name, description, details, condition, startDay, storeID, collabID);
        
        // fetchData(token, requestBody).then(result => {
        //     let response = result;
        //     console.log(response);
        // })

        fetch('http://18.218.142.78/test/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        }
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log('result-from-login', resData);
            this.setState({ result: resData });
        })
        .catch(err => {
            console.log(err);
            console.log(JSON.stringify(requestBody));
        });

    };

  render() {
    const { classes } = this.props;
    const { handleChange, handleDate, formatDate } = this;
    if(this.state.result){
    return (
        <Redirect
            to={{
            pathname: "/dashboard/collab/coupon/success",
            state: { result: this.state.result }
            }}
        />
        )
    }
    return (
      <Fragment>
        <Typography variant="h5" component="h2" className={classes.title}>
          Create Coupon
                </Typography>

        <form className="auth-form loginForm" onSubmit={this.submitHandler}>
          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="name-input">Name</InputLabel>
            <TextField
              id="name-input"
              name="name"
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="description-input">Description</InputLabel>
            <TextField
              id="description-input"
              name="description"
              placeholder="Coupon Description"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="details-input">Details</InputLabel>
            <TextField
              id="details-input"
              name="details"
              placeholder="Coupon Details"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="condition-input">Conditions</InputLabel>
            <TextField
              id="condition-input"
              name="condition"
              variant="outlined"
              type="number"
              onChange={handleChange}
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
                  name="startDay"
                  variant="outlined"
                  type="date"
                  defaultValue={formatDate()}
                  onChange={handleDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <InputLabel className={classes.input} htmlFor="date-end">Day End</InputLabel>
                <TextField
                  id="date-end"
                  name="endDay"
                  variant="outlined"
                  type="date"
                  defaultValue="2017-05-24"
                  // onChange={handleChange}
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
            // onChange={handleChange}

            />
          </div>

          <div className={classes.inputLabel}>

            <Button variant="contained" size="large" color="primary" type="submit">
              Submit
                                    </Button>

            <Button variant="contained" size="large" color="secondary" className={classes.button}>
              Reset
                                    </Button>

          </div>


        </form>




      </Fragment>
    );
  }
}


export default withStyles(styles)(Customer);
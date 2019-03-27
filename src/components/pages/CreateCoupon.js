import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  Typography,
  Grid,
  InputLabel,
  TextField,
  InputAdornment
} from "@material-ui/core/"
import createCoupon from "../../graphql/createCoupon"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  title: {
    margin: "0 10px",
    padding: "10px 0"
  },
  inputLabel: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: "2rem"
  },
  input: {
    display: "block"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row"
  }
})

class Customer extends Component {
  state = {
    storeId: "5c896895118b9702da2d0fbb",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzhhYjRmYTg0ODNkYjQxOWMxOWZlZGQiLCJyb2xlIjoic3RvcmUiLCJlbWFpbCI6Imt1bmFsZGFuZG9uYTAwOUBnbWFpbC5jb20iLCJpYXQiOjE1NTI3NzkwNTgsImV4cCI6MTU1Mjc4MjY1OH0.1tY2r1qXYkYI2OhQxp9uGIY64QVgIxhiSEdlNiEpWVg"
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target["name"]]: e.target["value"]
    })
  }

  handleDate = e => {
    e.preventDefault()
    this.setState({
      [e.target["name"]]: new Date(e.target["value"]).toISOString()
    })
  }

  submitHandler = event => {
    event.preventDefault()

    const name = this.state.name
    const description = this.state.description
    const details = this.state.details
    const condition = this.state.condition
    const startDate = this.state.startDay
    const storeID = this.state.storeId
    const token = this.state.token

    // if (name.trim().length === 0 || condition.trim().length === 0) {
    //   return;
    // }

    let requestBody = createCoupon(
      name,
      description,
      details,
      condition,
      startDate,
      storeID
    )

    fetch("http://18.218.142.78/test/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!")
        }
        return res.json()
      })
      .then(resData => {
        console.log("result-from-login", resData)
        this.setState({ result: resData })
      })
      .catch(err => {
        console.log(err)
        console.log(JSON.stringify(requestBody))
      })
  }

  render() {
    const { classes } = this.props
    const { handleChange, handleDate } = this
    return (
      <Fragment>

        <form className="auth-form loginForm" onSubmit={this.submitHandler}>
          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="name-input">
              Name
            </InputLabel>
            <TextField
              id="name-input"
              name="name"
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="description-input">
              Description
            </InputLabel>
            <TextField
              id="description-input"
              name="description"
              placeholder="Coupon Description"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="details-input">
              Details
            </InputLabel>
            <TextField
              id="details-input"
              name="details"
              placeholder="Coupon Details"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="condition-input">
              Conditions
            </InputLabel>
            <TextField
              id="condition-input"
              name="condition"
              variant="outlined"
              type="number"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">points</InputAdornment>
                )
              }}
            />
          </div>

          <div className={classes.inputLabel}>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <InputLabel className={classes.input} htmlFor="date-start">
                  Day Start
                </InputLabel>
                <TextField
                  id="date-start"
                  name="startDay"
                  variant="outlined"
                  type="date"
                  defaultValue="2017-05-24"
                  onChange={handleDate}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <InputLabel className={classes.input} htmlFor="date-end">
                  Day End
                </InputLabel>
                <TextField
                  id="date-end"
                  name="endDay"
                  variant="outlined"
                  type="date"
                  defaultValue="2017-05-24"
                  // onChange={handleChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.inputLabel}>
            <InputLabel className={classes.input} htmlFor="numcoupon">
              Number Of Coupons
            </InputLabel>
            <TextField
              id="numcoupon"
              variant="outlined"
              type="number"
              // onChange={handleChange}
            />
          </div>

          <div className={classes.inputLabel}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              Submit
            </Button>

            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.button}
            >
              Reset
            </Button>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Customer)

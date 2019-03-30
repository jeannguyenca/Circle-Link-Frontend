import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  Grid,
  InputLabel,
  TextField,
  InputAdornment
} from "@material-ui/core/"
import { Redirect } from "react-router-dom"

import createCoupon, { createCollabCoupon } from "../../graphql/createCoupon"
import fetchFunction from "../../graphql/fetchFunction"
import { today } from "../../helpers/DateFormat"

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
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }
  state = {
    token: this.props.token,
    fetched: false,
    startDay: new Date().toISOString(),
    endDay: new Date().toISOString()
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

  async submitHandler(event) {
    event.preventDefault()

    const name = this.state.name
    const description = this.state.description
    const details = this.state.details
    const condition = this.state.condition
    const startDate = this.state.startDay
    const endDate = this.state.endDay
    const storeID = this.props.storeId
    const collabID = this.props.collabId
    const token = this.props.token

    let requestBody

    if (collabID) {
      requestBody = createCollabCoupon(
        name,
        description,
        details,
        condition,
        startDate,
        endDate,
        storeID,
        collabID
      )
    } else {
      requestBody = createCoupon(
        name,
        description,
        details,
        condition,
        startDate,
        endDate,
        storeID
      )
    }

    const resData = await fetchFunction(requestBody, token)
    this.setState({ result: resData, fetched: true })
  }

  render() {
    const { classes } = this.props
    const { handleChange, handleDate } = this
    return (
      <Fragment>
        {this.state.fetched && (
          <Redirect
            to={{
              pathname: "/dashboard/collab"
            }}
          />
        )}
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
                  defaultValue={today()}
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
                  defaultValue={today()}
                  onChange={handleDate}
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

import React from "react"
import { withStyles } from "@material-ui/core/styles"

import {
  Button,
  Grid,
  InputLabel,
  TextField,
  InputAdornment,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@material-ui/core/"
import red from "@material-ui/core/colors/red"

import { today } from "../../helpers/DateFormat"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  title: {
    margin: "0 10px",
    padding: "10px 0"
  },
  inputLabel: {
    marginBottom: "2rem"
  },
  input: {
    display: "block",
    color: "black",
    fontSize: "16px",
    fontWeight: 600,
    padding: "0 0 5px 0",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px"
    }
  },
  textfield: {
    height: "40px",
    "& fieldset": {
      borderColor: "black !important"
    }
  },
  percentOff: {
    width: "100px"
  },
  free: {
    width: "auto"
  },
  date: {
    "& fieldset": {
      borderRadius: 0
    }
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row"
  },
  radioGroup: {
    "& span": {
      color: "black",
      marginTop: "0"
    }
  },
  button: {
    boxShadow: "none",
    width: "130px",
    marginRight: "20px"
  },
  submit: {
    color: "white",
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    margin: "20px 20px 20px 0",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      background: "white",
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      marginBottom: "0"
    }
  },
  cancel: {
    color: "white",
    border: `1px solid ${red[500]}`,
    background: red[500],
    margin: "20px 0 20px 0",
    "&:hover": {
      borderColor: red[500],
      background: "white",
      color: red[500]
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      marginBottom: "0"
    }
  }
})

const CreateCouponForm = props => {
  const { classes, handleChange, handleDate, submitHandler, type } = props

  return (
    <form onSubmit={submitHandler}>
      <Grid container>
        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <InputLabel className={classes.input} htmlFor="name-input">
            Name
          </InputLabel>
          <TextField
            className={classes.textfield}
            id="name-input"
            name="name"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <InputLabel className={classes.input} htmlFor="description-input">
            Description
          </InputLabel>
          <TextField
            className={classes.textfield}
            id="description-input"
            name="description"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>

        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <InputLabel className={classes.input} htmlFor="name-input">
            Discount type
          </InputLabel>
          <RadioGroup
            row
            name="discountType"
            aria-label="discountType"
            value={type}
            onChange={props.handleRadio}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="percentOff"
              control={<Radio />}
              label="Percent Off"
              checked={true}
            />
            <FormControlLabel value="free" control={<Radio />} label="Free" />
            <FormControlLabel
              value="amount"
              control={<Radio />}
              disabled
              label="Amount of product"
            />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <InputLabel className={classes.input} htmlFor="details-input">
            {type === "percentOff"
              ? "Amount percent off"
              : "Free product details"}
          </InputLabel>
          <TextField
            className={`${classes.textfield} ${
              type === "percentOff" ? classes.percentOff : classes.free
            }`}
            id="details-input"
            name="details"
            // placeholder="Coupon Details"
            variant="outlined"
            type={type === "percentOff" ? "number" : ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {type === "percentOff" ? "%" : ""}
                </InputAdornment>
              ),
              inputProps: { min: 0, max: 100 }
            }}
          />
        </Grid>

        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <InputLabel className={classes.input} htmlFor="condition-input">
            Conditions
          </InputLabel>
          <TextField
            className={classes.textfield}
            id="condition-input"
            name="condition"
            variant="outlined"
            type="number"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">points</InputAdornment>
              ),
              inputProps: { min: 0, max: 1000 }
            }}
          />
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={10}
          md={8}
          className={classes.inputLabel}
        >
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.input} htmlFor="date-start">
              Day Start
            </InputLabel>
            <TextField
              className={`${classes.textfield} ${classes.date}`}
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
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.input} htmlFor="date-end">
              Day End
            </InputLabel>
            <TextField
              className={`${classes.textfield} ${classes.date}`}
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

        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <InputLabel className={classes.input} htmlFor="numcoupon">
            Number Of Coupons
          </InputLabel>
          <TextField
            className={`${classes.textfield} ${classes.percentOff}`}
            id="numcoupon"
            variant="outlined"
            type="number"
            InputProps={{
              inputProps: { min: 0, max: 1000 }
            }}
          />
        </Grid>

        <Grid item xs={12} sm={7} className={classes.inputLabel}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={`${classes.button} ${classes.submit}`}
          >
            Submit
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={`${classes.button} ${classes.cancel}`}
            onClick={() => {}}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default withStyles(styles)(CreateCouponForm)

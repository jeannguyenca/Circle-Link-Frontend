import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import gql from "graphql-tag";
import { Query } from "react-apollo";


const styles = {
    title: {
        margin: '0 10px',
        padding: '10px 0',
    }
  };

class ViewCoupon extends Component {
    
  render() {

    const { classes } = this.props;
    return (
      <Fragment>
          <Typography variant="h5" component="h2" className={classes.title}>
              View Coupons
          </Typography>
          
      </Fragment>
    );
    }
  }

  
  export default withStyles(styles)(ViewCoupon);

import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Face from '@material-ui/icons/Face';

const styles = {
    card: {
      minWidth: 275,
      textAlign: 'center',
      display: 'inline-block',
      margin: '10px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    cardAction: {
        justifyContent: 'center',
    },
    title: {
        margin: '0 10px',
        padding: '10px 0',
    }
  };

class Customer extends Component {
    
  render() {

    const { classes } = this.props;


    return (
        <Fragment>
            <Typography variant="h5" component="h2" className={classes.title}>
                Customers Inbox
            </Typography>

            <Card  className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Messages
                    </Typography>
                    <Typography variant="h3">
                    0
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button size="medium" variant="outlined">View Inbox</Button>
                </CardActions>
            </Card>
           
            <hr />

            <Typography variant="h5" component="h2" className={classes.title}>
                Analytics Overview
            </Typography>

            <Card  className={classes.card}>
                <CardContent>
                    <Face />
                    <Typography variant="h3">
                    89
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Customer Visited
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                    10%
                    </Typography>
                </CardContent>
            </Card>

            <Card  className={classes.card}>
                <CardContent>
                    <Face />
                    <Typography variant="h3">
                    26
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Coupons used
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                    10%
                    </Typography>
                </CardContent>
            </Card>

            <Card  className={classes.card}>
                <CardContent>
                    <Face />
                    <Typography variant="h3">
                    23
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Stores In Collab
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                    10%
                    </Typography>
                </CardContent>
            </Card>


        </Fragment>
    );
    }
  }

  
  export default withStyles(styles)(Customer);

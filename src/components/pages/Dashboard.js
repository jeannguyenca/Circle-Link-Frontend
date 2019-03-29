import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Face from '@material-ui/icons/Face';
import Aup from '@material-ui/icons/ArrowDropUp'

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

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLogin: true,
          id: "",
          token: ""
        }
      }

    componentWillMount() {
        if (sessionStorage.getItem("auth")) {
          this.getUserInfo();
        } else {
          this.setState({ isLogin: false });
        }
    }

    getUserInfo = () => {
        let data = JSON.parse(sessionStorage.getItem("auth"));
        // console.log(data);
        let userInfo = {
            id: data.userId,
            token: data.token,
        }
        this.setState(userInfo);
        console.log(this.props)
    }
    
  render() {

    const { classes } = this.props;
    return (
        <Fragment>
            <Typography variant="h5" component="h2" className={classes.title}>
                Inbox
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
                    <Aup className="icons"/>10%
                    </Typography>
                </CardContent>
            </Card>


        </Fragment>
    );
    }
  }

  
  export default withStyles(styles)(Dashboard);

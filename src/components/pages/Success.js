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

class Success extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLogin: true,
          id: "",
          token: "",
          couponId: props.location.state.result.data.createCoupon._id,
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
    }
    
  render() {

    const { classes } = this.props;
    console.log(classes)


    return (
        <Fragment>
            <Typography variant="h5" component="h2" className={classes.title}>
                Coupon Created {this.state.couponId}
            </Typography>
        </Fragment>
    );
    }
  }

  
  export default withStyles(styles)(Success);

import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom"
import Menu from "./Menu"

import Stats from "../pages/Stats"
import Dashboard from "../pages/Dashboard"
import ViewCoupon from "../pages/ViewCoupon"
import ViewCollabCoupons from "../pages/ViewCollabCoupons"
import CreateCoupon from "../pages/CreateCoupon"
import CreateCollabCoupon from "../pages/CreateCollabCoupon"
import ChooseCollab from "../pages/ChooseCollab"
import Success from "../pages/Success"
import { Redirect } from "react-router-dom"
import getStoreId from '../../graphql/getStoreId'

const drawerWidth = 220

const styles = theme => ({
  container: {
    width: `calc(100% - drawerWidth)`,
    marginLeft: drawerWidth,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0
    }
  }
})

class Body extends Component {
  state = {
    isLogin: true,
    id: "",
    token: "",
    storeId: "", 
    fetched: false,
    userInfo: [],
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
      let userInfo = {
          id: data.userId,
          token: data.token,
      }
      this.setState(userInfo);
      this.fetchStoreId(data.token);
  }

  fetchStoreId = (token) =>{
    let body = getStoreId();
    fetch('http://18.218.142.78/test/graphql', {
        method: 'POST',
        body: JSON.stringify(body),
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
      let result = resData.data.stores;
      if(!result.length==0){
        this.setState({ storeId: result[0]._id, fetched: true }, () => {
          // this.fetchCoupons(this.state.storeId)
        });
      } else {
        this.setState({ fetched: true })
      }
  
    })
    .catch(err => {
        console.log(err);
    });
}
  
  logout = () => {
    sessionStorage.setItem("auth", "");
    sessionStorage.clear();
    this.setState({ isLogin: false });
  }

  render() {
    const { classes } = this.props
    if (!this.state.isLogin) {
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }

    const Wrapper = ({ children }) => (
      <div className={classes.root}>{children}</div>
    )
    if(this.state.fetched){
    return (
      <div className={classes.container}>
        <Menu logout={this.logout} />
        <Wrapper>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />

            <Route path="/dashboard/stat/customers" />
            <Route path="/dashboard/stat/coupons" component={Stats} />

            <Route path="/dashboard/coupons/create" component={CreateCoupon} />
            <Route path="/dashboard/coupons" render={()=><ViewCoupon token={this.state.token} storeid={this.state.storeId}/>} />

            <Route path="/dashboard/collab/create" component={ChooseCollab} />
            <Route 
            path="/dashboard/collab/createCoupon/:collabStores" 
            render={(props) => <CreateCollabCoupon {...props} token={this.state.token} storeid={this.state.storeId}/>}
             />
             <Route path="/dashboard/collab/coupon/success" component={Success} />

            <Route 
            path="/dashboard/collab"
            render={(props) => <ViewCollabCoupons {...props} token={this.state.token} storeid={this.state.storeId}/>} 
            />

            <Route path="/dashboard/coupon/success" component={Success} />
            
            <Route path="/dashboard/support" component={Stats} />
            <Route path="/dashboard/feedback" component={Stats} />
          </Switch>
        </Wrapper>
      </div>
    )
    } else {
      return(
        <div>
          <Menu logout={this.logout} />
        </div>
        
      )
    }
  }
}
export default withStyles(styles)(Body)

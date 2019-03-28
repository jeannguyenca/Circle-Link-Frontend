import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import gql from "graphql-tag"
// import { Query } from "react-apollo"
import viewCoupon from '../../graphql/viewCoupon'

import SingleCoupon from "../parts/SingleCoupon"

const styles = {
    title: {
        margin: '0 10px',
        padding: '10px 0',
    }
  };

class ViewCoupon extends Component {
    state = {
        isLogin: true,
        id: "",
        token: "",
        storeId: this.props.storeId, 
        fetched: false,
    }

    componentWillMount() {
        this.fetchCoupons()
    }

      fetchCoupons = async() => {
        let body = viewCoupon(this.props.storeId)
          fetch('http://18.218.142.78/test/graphql', {
              method: 'POST',
              body: JSON.stringify(body),
              headers: {
                  'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData => {
                this.setState({ result: resData.data.coupons, fetched: true });
            })
            .catch(err => {
                console.log(err);
            });
      };

  render() {

      if(this.state.fetched){
        const { result } = this.state
        return (
            <Fragment>
                <div>
                    {result.map(coupons => (
                        <div key={coupons._id}>
                        <h1>{coupons.name}</h1>
                        <p>{coupons._id}</p>
                        <p>{coupons.store.storename}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
            )
      }
    
    return(
        <Fragment>No Coupons to display</Fragment>
    );
  
    }
  }

  
  export default withStyles(styles)(ViewCoupon);

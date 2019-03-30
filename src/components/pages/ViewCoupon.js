import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import gql from "graphql-tag"
import { Query } from "react-apollo"

import SingleCoupon from "../parts/SingleCoupon"

const GET_COUPONS = gql`
  query coupons($storeId: ID, $option: String) {
    coupons(storeId: $storeId, option: $option) {
      name
      description
      condition
      startDay
      expiredDay
    }
  }
`

const styles = {
  title: {
    margin: "0 10px",
    padding: "10px 0"
  }
}

class ViewCoupon extends Component {
  render() {
    const { classes, storeId, option } = this.props
    return (
      <Fragment>
        <Query query={GET_COUPONS} variables={{ storeId, option }}>
          {({ loading, error, data }) => {
            if (loading)
              return <Typography variant="body1">"Loading..."</Typography>
            if (error)
              return (
                <Typography variant="body1">Error! ${error.message}</Typography>
              )

            return (
              <div>
                {data.coupons.map((coupon, index) => (
                  <Fragment key={index}>
                    <SingleCoupon {...coupon} />
                  </Fragment>
                ))}
              </div>
            )
          }}
        </Query>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ViewCoupon)

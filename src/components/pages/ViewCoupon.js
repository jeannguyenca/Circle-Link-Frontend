import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import gql from "graphql-tag"
import { Query } from "react-apollo"

import SingleCoupon from "../parts/SingleCoupon"

// const client = new ApolloClient({
//     uri: "http://18.218.142.78/test/graphql"
//   });

// client
// .query({
// query: gql`
// {
//     coupons {
//       _id
//       name
//       store {
//         storename
//       }
//     }
//   }
// `
// })
// .then(result => console.log(result));

// const GET_COUPONS = gql`
//   {
//     coupons(option: "mystore") {
//       _id
//       name
//       store {
//         storename
//       }
//     }
//   }
// `

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

// const Coupons = () => (
//     <Query query={GET_COUPONS}>
//       {({ loading, error, data }) => {
//           console.log('Data:', data);
//         if (loading) return "Loading...";
//         if (error) return `Error! ${error.message}`;

//         return (
//           <div>
//             {data.coupons.map(coupons => (
//                 <div>
//                 <h1>{coupons.name}</h1>
//                 <p>{coupons._id}</p>
//                 <p>{coupons.store.storename}</p>
//                 </div>
//             ))}
//           </div>
//         );
//       }}
//     </Query>
//   );

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

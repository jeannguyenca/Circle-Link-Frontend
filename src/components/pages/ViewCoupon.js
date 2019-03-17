import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";

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



const GET_COUPONS = gql`
{
    coupons {
      _id
      name
      store {
        storename
      }
    }
  }
`;

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
                <Query query={GET_COUPONS}>
                    {({ loading, error, data }) => {
                        if (loading) return "Loading...";
                        if (error) return `Error! ${error.message}`;
                
                        return (
                        <div>
                            {data.coupons.map(coupons => (
                                <div key={coupons._id}>
                                <h1>{coupons.name}</h1>
                                <p>{coupons._id}</p>
                                <p>{coupons.store.storename}</p>
                                </div>
                            ))}
                        </div>
                        );
                    }}
                </Query>
            </Fragment>
    );
    }
  }

  
  export default withStyles(styles)(ViewCoupon);

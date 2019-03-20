import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

import SingleCollab from "../parts/SingleCollab"
import MapHandle from "../parts/MapHandle"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  selected: {
    background: `none !important`,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px"
  }
})

const GET_STORES = gql`
  query {
    stores {
      _id
      storename
      address
    }
  }
`
class ChooseCollab extends React.Component {
  state = {
    selectedIndex: 0
  }
  handleClick(index) {
    this.setState({
      selectedIndex: index
    })
  }
  launches() {
    const { classes } = this.props

    return (
      <Query query={GET_STORES}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>ERROR</p>

          return (
            <Grid container className={classes.root} spacing={40}>
              <Grid item xs={12} sm={5}>
                <List>
                  {data.stores &&
                    data.stores.map((store, index) => {
                      return (
                        <React.Fragment key={index}>
                          <ListItem
                            button
                            onClick={() => this.handleClick(index)}
                            selected={this.state.selectedIndex === index}
                            classes={{ selected: classes.selected }}
                          >
                            <SingleCollab {...store} />
                            
                          </ListItem>
                          <Link
                            to={`/dashboard/collab/createCoupon/${store._id}`}
                          // className={classes.link}
                          >
                            <Button
                              variant="outlined"
                              color="primary"
                            // className={classes.button}
                            >
                              Choose Store
                              </Button>
                          </Link>
                          <Divider component="div" />
                        </React.Fragment>
                      )
                    })}
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                {data.stores && (
                  <MapHandle
                    stores={data.stores}
                    selectedIndex={this.state.selectedIndex}
                  />
                )}
              </Grid>
            </Grid>
          )
        }}
      </Query>
    )
  }

  render() {
    return this.launches()
  }
}

export default withStyles(styles)(ChooseCollab)

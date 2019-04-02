import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Divider,
  Button,
  Link,
  Typography
} from "@material-ui/core/"

import { getStores } from "../../graphql/stores"
import fetchFunction from "../../graphql/fetchFunction"

import SingleCollab from "../parts/SingleCollab"
import MapHandle from "../parts/MapHandle"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontWeight: 700,
    marginTop: "20px"
  },
  scrollList: {
    position: "relative",
    overflow: "auto",
    maxHeight: "calc(100vh - 200px)"
  },
  listItem: {
    // margin: "20px 0",
    border: `1px solid white`,
    padding: "20px",
    "&:hover": {
      background: "none",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "10px"
    }
  },
  selected: {
    background: `none !important`,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px"
  },
  button: {
    margin: "20px",
    textDecoration: "none",
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
      textDecoration: "none"
    }
  },
  divider: {
    marginBottom: "20px"
  }
})

class ChooseCollab extends React.Component {
  state = {
    selectedIndex: 0
  }
  handleClick(index) {
    this.setState({
      selectedIndex: index
    })
  }
  async fetchData() {
    // const { storeId, token } = this.props

    let requestBody = getStores()

    const resData = await fetchFunction(requestBody, "")
    if (this._isMounted) {
      this.setState({ stores: resData.data.stores })
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchData()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  // shouldComponentUpdate(prepState) {
  //   return prepState.stores !== this.state.stores
  // }

  launches() {
    const { classes, storeId, address } = this.props
    let storeList = this.state.stores

    for (let i = 0;i < storeList.length;i++) {
      if (storeList[i]._id === storeId) {
        storeList.splice(i, 1)
      }
    }

    return (<Grid container className={classes.root} spacing={40}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  component="h4"
                  className={classes.title}
                >
                  Choose a store near by
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <List className={classes.scrollList}>
                  {storeList &&
                    storeList.map((store, index) => {
                      return (
                        store._id !== storeId && (
                          <React.Fragment key={index}>
                            <ListItem
                              button
                              onClick={() => this.handleClick(index)}
                              selected={this.state.selectedIndex === index}
                              className={classes.listItem}
                              classes={{ selected: classes.selected }}
                            >
                              <SingleCollab {...store} />
                            </ListItem>
                            <Link
                              href={`/dashboard/collab/createCoupon/${
                                store._id
                              }`}
                              // className={classes.link}
                            >
                              <Button
                                color="primary"
                                variant="outlined"
                                className={classes.button}
                              >
                                Choose Store
                              </Button>
                            </Link>
                            <Divider
                              component="div"
                              className={classes.divider}
                            />
                          </React.Fragment>
                        )
                      )
                    })}
                </List>
              </Grid>
              <Grid item xs={12} sm={7}>
                {storeList && address && (
                  <MapHandle
                    stores={storeList}
                    address={address}
                    selectedIndex={this.state.selectedIndex}
                  />
                )}
              </Grid>
            </Grid>)
  }

  render() {
    return (this.state.stores ? this.launches() : <p>Fetching...</p>)
  }
}

export default withStyles(styles)(ChooseCollab)

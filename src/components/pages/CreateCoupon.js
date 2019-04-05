import React, { Component, Fragment } from "react"

import { Redirect } from "react-router-dom"

import Form from "../parts/CreateCouponForm"

import createCoupon, { createCollabCoupon } from "../../graphql/createCoupon"
import fetchFunction from "../../graphql/fetchFunction"

class Customer extends Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }
  state = {
    token: this.props.token,
    fetched: false,
    startDay: new Date().toISOString(),
    endDay: new Date().toISOString(),
    type: "percentOff"
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target["name"]]: e.target["value"]
    })
  }

  handleDate = e => {
    e.preventDefault()
    this.setState({
      [e.target["name"]]: new Date(e.target["value"]).toISOString()
    })
  }

  handleRadio = e => {
    this.setState({ type: e.target.value })
  }

  async submitHandler(event) {
    event.preventDefault()

    const name = this.state.name
    const type = this.state.type
    const description = this.state.description
    const details = this.state.details
    const condition = this.state.condition
    const startDate = this.state.startDay
    const endDate = this.state.endDay
    const storeID = this.props.storeId
    const collabID = this.props.match.params.collabStore
    const token = this.props.token

    let requestBody

    if (collabID) {
      requestBody = createCollabCoupon(
        name,
        type,
        description,
        details,
        condition,
        startDate,
        endDate,
        storeID,
        collabID
      )
      console.log(requestBody)
    } else {
      requestBody = createCoupon(
        name,
        type,
        description,
        details,
        condition,
        startDate,
        endDate,
        storeID
      )
    }

    const resData = await fetchFunction(requestBody, token)
    this.setState({ result: resData, fetched: true })
  }

  render() {
    const { handleChange, handleDate, submitHandler, handleRadio } = this
    return (
      <Fragment>
        {this.state.fetched && this.props.match.params.collabStore && (
          <Redirect
            to={{
              pathname: "/dashboard/collab"
            }}
          />
        )}
        {this.state.fetched && !this.props.match.params.collabStore && (
          <Redirect
            to={{
              pathname: "/dashboard/coupons"
            }}
          />
        )}

        <Form
          handleChange={handleChange}
          handleDate={handleDate}
          submitHandler={submitHandler}
          handleRadio={handleRadio}
          type={this.state.type}
        />
      </Fragment>
    )
  }
}

export default Customer

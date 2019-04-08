import React, { Component, Fragment } from "react"

import { deleteCoupon, viewCoupon } from "../../graphql/createCoupon"
import fetchFunction from "../../graphql/fetchFunction"

import SingleCoupon from "../parts/SingleCoupon"



class ViewCoupon extends Component {
  _isMounted = false
  constructor(props) {
    super(props)
    this.state = {
      coupons: []
    }
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  async deleteHandler(id) {
    const { token } = this.props
    let requestBody = deleteCoupon(id)
    await fetchFunction(requestBody, token)

    this.fetchData()
  }

  async fetchData() {
    const { storeId, token, option } = this.props

    let requestBody = viewCoupon(storeId, option)

    const resData = await fetchFunction(requestBody, token)
    if (this._isMounted) {
      this.setState({ coupons: resData.data.coupons })
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchData()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <Fragment>
        {this.state.coupons &&
          this.state.coupons.map((coupon, index) => (
            <Fragment key={index}>
              <SingleCoupon {...coupon} option={this.props.option} deleteHandler={this.deleteHandler} />
            </Fragment>
          ))}
      </Fragment>
    )
  }
}

export default ViewCoupon

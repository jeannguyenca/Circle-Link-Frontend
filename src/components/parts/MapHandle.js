import React, { Component } from "react"
import axios from "axios"
import GoogleMaps from "./GoogleMaps"

const KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`

class MapHandle extends Component {
  _isMounted = false
  state = {
    center: {
      lat: 49.2631369,
      lng: -123.1310463
    },
    isMarkerShown: true,
    loading: true,
    showData: false,
    locations: []
  }

  componentDidMount() {
    this._isMounted = true

    this.props.stores.map(store => {
      return this.searchPlaces(store.address)
    })
    this.searchAPlace(this.props.address)
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.country !== prevProps.country) {
  //     this.searchPlaces(this.props.country)
  //   }
  // }

  componentWillUnmount() {
    this._isMounted = false
  }

  searchAPlace = place => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=geometry&key=${KEY}`
      )
      .then(res => {
        const newLngLat = res.data.candidates[0].geometry.location
        if (this._isMounted) {
          this.setState({ center: newLngLat })
        }
      })
      .catch(err => console.log(err))
  }

  searchPlaces = place => {
    let locationArray = this.state.locations
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=geometry&key=${KEY}`
      )
      .then(res => {
        const newLngLat = res.data.candidates[0].geometry.location
        locationArray.push(newLngLat)
        if (this._isMounted) {
          this.setState({ locations: locationArray })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.locations)
    return (
      <React.Fragment>
        {this.state.locations.length > 0 && (
          <GoogleMaps
            isMarkerShown
            center={this.state.center}
            locations={this.state.locations}
            selectedIndex={this.props.selectedIndex}
            // style={mapStyle}
          />
        )}
      </React.Fragment>
    )
  }
}

export default MapHandle

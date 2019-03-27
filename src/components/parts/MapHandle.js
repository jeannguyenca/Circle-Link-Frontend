import React, { Component } from "react"
import axios from "axios"
import GoogleMaps from "./GoogleMaps"

const KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`

class MapHandle extends Component {
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
    // this.searchPlaces(this.props.country);
    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(
    //     this.searchPlaces(this.props.country),
    //     2000
    //   );
    // }
    this.props.stores.map(store => {
      return this.searchPlaces(store.address)
    })

  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.country !== prevProps.country) {
      this.searchPlaces(this.props.country)
    }
  }

  searchPlaces = place => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=geometry&key=${KEY}`
      )
      .then(res => {
        // console.log("the response", res)
        const newLngLat = res.data.candidates[0].geometry.location
        this.state.locations.push(newLngLat)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <GoogleMaps
        isMarkerShown
        center={this.state.center}
        locations={this.state.locations}
        selectedIndex={this.props.selectedIndex}
        // style={mapStyle}
      />
    )
  }
}

export default MapHandle

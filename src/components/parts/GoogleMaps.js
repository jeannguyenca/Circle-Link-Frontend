import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

import blackMarker from "../../assets/icons/blackcircle.svg"
import greenMarker from "../../assets/icons/greencircle.svg"
import centerMarker from "../../assets/icons/location.svg"

const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel")

const KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`

const labelSize = { width: 20 }
const labelPadding = 16

var markerStyling = {
  clear: "both",
  fontSize: "15px",
  color: "#FFFFFF",
  borderRadius: "100%",
  padding: "17px 4px 0 6px",
  whiteSpace: "nowrap",
  textAlign: "center"
}

const maps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?libraries=places&key=${KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  let locations = props.locations

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={props.center}
      center={props.center}
      // defaultOptions={{
      //   styles: props.style
      // }}
    >

      {props.isMarkerShown &&
        locations.map((location, index) => {
          if (index === props.selectedIndex) {
            return (
              <MarkerWithLabel
                key={index}
                position={location}
                labelAnchor={{
                  x: labelSize.width / 2,
                  y: labelSize.width / 2 + labelPadding * 2
                }}
                labelStyle={markerStyling}
                icon={{ url: greenMarker }}
              >
                <div>{index + 1}</div>
              </MarkerWithLabel>
            )
          } else {
            return (
              <MarkerWithLabel
                key={index}
                position={location}
                labelAnchor={{
                  x: labelSize.width / 2,
                  y: labelSize.width / 2 + labelPadding * 2
                }}
                labelStyle={markerStyling}
                icon={{ url: blackMarker }}
              >
                <div>{index + 1}</div>
              </MarkerWithLabel>
            )
          }
        })}
              <Marker
        position={props.center}
        icon={{ url: centerMarker }}
      />
    </GoogleMap>
  )
})

export default maps

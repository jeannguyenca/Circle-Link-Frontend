import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

import marker from "../../assets/icons/location.svg"
import markerSelected from "../../assets/icons/location-inactive.svg"

const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel")

const KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`

const labelSize = { width: 20 }
const labelPadding = 16

// const roundMarker = () => {
//   return (<svg height="100" width="100">
//     <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="black" />
//   </svg >)
// }

var markerStyling = {
  clear: "both",
  backgroundColor: "black",
  fontWeight: "500",
  color: "#FFFFFF",
  borderRadius: "100%",
  padding: "4px",
  whiteSpace: "nowrap",
  width: "30px",
  height: "30px",
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
              // <Marker
              //   key={index}
              //   position={location}
              //   // icon={{
              //   // url: {marker},
              //   // scaledSize: {width: 30, height: 30},
              //   // anchor: {x: 15, y: 15 },
              //   // }}
              //   icon={{ url: marker }}
              // />
              <MarkerWithLabel
                key={index}
                position={location}
                labelAnchor={{
                  x: labelSize.width / 2 + labelPadding / 2,
                  y: labelSize.width / 2 + labelPadding * 2
                }}
                labelStyle={markerStyling}
                icon={{ url: marker, scaledSize: { width: 50, height: 50 } }}
              >
                <div>{index}</div>
              </MarkerWithLabel>
            )
          } else {
            return (
              <Marker
                key={index}
                position={location}
                // icon={{
                // url: {marker},
                // scaledSize: {width: 30, height: 30},
                // anchor: {x: 15, y: 15 },
                // }}
                icon={{ url: markerSelected }}
              />
            )
          }
        })}
    </GoogleMap>
  )
})

export default maps

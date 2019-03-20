import React from "react"


const SingleCollab = props => {
  const { storename, address } = props
  return (
    <div>
      <h4>{storename}</h4>
      <p>{address}</p>
    </div>
  )
}

export default SingleCollab

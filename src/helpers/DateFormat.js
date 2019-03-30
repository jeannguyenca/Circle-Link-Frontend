import moment from "moment"

const DateFormat = string => {
  if (string !== null) {
    return moment.unix(string / 1000).format("MMMM DD, YYYY")
  } else {
    return null
  }
}

export const today = () => {
  const today = moment().format("YYYY-MM-DD")
  return today
}
export default DateFormat

import React from "react"

import BarChartCustom from "../parts/BarChart"

const data = [
  { name: "March 15", cust: 103 },
  { name: "March 16", cust: 124 },
  { name: "March 17", cust: 111 },
  { name: 'March 18', cust: 104 },
  { name: 'March 19', cust: 88 },
  { name: 'March 20', cust: 102 },
  { name: 'March 21', cust: 113 },
  { name: 'March 22', cust: 145 },
  { name: 'March 23', cust: 123 },
  { name: 'March 24', cust: 110 },
  { name: 'March 25', cust: 121 },
  { name: 'March 26', cust: 99 },
  { name: 'March 27', cust: 105 },
  { name: 'March 28', cust: 103 },
  { name: 'March 29', cust: 159 },
  { name: 'March 30', cust: 121 },
  { name: 'March 31', cust: 142 },
  { name: 'April 1', cust: 110 },
  { name: 'April 2', cust: 123 },
  { name: 'April 3', cust: 143 },

]

const Stats = props => {
  return <BarChartCustom data={data} keyData="cust" />
}

export default Stats

import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import "./BarChart.css"

const BarChartCustom = props => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={false} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={props.keyData} fill="rgba(79,201,91,0.5)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartCustom

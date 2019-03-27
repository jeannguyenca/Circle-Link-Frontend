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
import Hidden from "@material-ui/core/Hidden"

import "./BarChart.css"

const BarChartCustom = props => {
  return (
    <React.Fragment>
      {/* hidden in small screen */}
      <Hidden smDown implementation="css">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={props.data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            barCategoryGap="5%"
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tick={false} />
            <YAxis type="number" domain={[0, "dataMax+10"]} axisLine={false} />
            <Tooltip
              itemStyle={{ color: "black" }}
              contentStyle={{ borderRadius: "10px" }}
            />
            <Bar dataKey={props.keyData} fill="rgba(79,201,91,0.3)" />
          </BarChart>
        </ResponsiveContainer>
      </Hidden>
      {/* hidden in medium screen */}
      <Hidden mdUp implementation="css">
      <ResponsiveContainer width="100%" height={1000}>
        <BarChart
          data={props.data}
          margin={{ top: 5, right: 40, left: 0, bottom: 5 }}
          barCategoryGap="25%"
          layout="vertical"
        >
          <CartesianGrid horizontal={false} />
          <XAxis type="number" domain={[0, "dataMax+10"]} axisLine={false} />
          <YAxis type="category" dataKey="name" tick={false} />
          <Tooltip
            itemStyle={{ color: "black" }}
            contentStyle={{ borderRadius: "10px" }}
          />
          <Bar dataKey={props.keyData} fill="rgba(79,201,91,0.3)" />
        </BarChart>
      </ResponsiveContainer>
      </Hidden>
    </React.Fragment>
  )
}

export default BarChartCustom

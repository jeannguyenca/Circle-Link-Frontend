import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import InformationBlock from "./InformationBlock"

const styles = theme => ({
  root: {
    maxWidth: "75em",
    margin: "auto",
    padding: "60px 30px",
    overflow: "hidden"
  },
  item: {

  }

})

const ThreeColumnsInfo = props => {
  const { classes, data, id } = props
  return (
    <div className={classes.root} id={ id }>
      <Grid container alignItems="stretch" spacing={40}>
        <Grid item xs={12} md={6}>
          <InformationBlock
            // header_align={data.header_align}
            header_1={data[0].header}
            img={data[0].img}
            stat={data[0].stat}
            para={data[0].para}
            align="left"
          />
        </Grid>
        <Grid item xs={12} md={6} container spacing={32}>
          {data[1].map((block, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>

                <InformationBlock
                  header_align={block.header_align}
                  header_2={block.header}
                  img={block.img}
                  stat={block.stat}
                  para={block.para}
                  align="left"
                  className={classes.item}
                />
              </Grid>

            )
          })}
          </Grid>
         

      </Grid>
    </div>
  )
}

export default withStyles(styles)(ThreeColumnsInfo)

import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/icons/Menu"
import PropTypes from "prop-types"
import  { isWidthDown } from "@material-ui/core/withWidth"

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    margin: "10px",
    boxShadow: "none",
    "align-self": "end"
  }
});
class ButtonAppBarCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapper: this.props.dataTarget.replace(/#/, ""),
      listMenus: this.props.menu,
      isMenuOpen: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.isMenuOpen = this.isMenuOpen.bind(this);
  }

  componentWillMount() {
    this.isMenuOpen();
  }
  componentDidMount() {
    window.addEventListener("resize", this.isMenuOpen);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.isMenuOpen);
  }

  //reset state and style when changing window size
  isMenuOpen() {
    let collapsed = document.getElementById(this.state.wrapper);

    if (isWidthDown("sm", this.props.width)) {
      this.setState({ isMenuOpen: false });
      if (collapsed !== null) {
        collapsed.style.display = "none";
        collapsed.style.top = "0";
        collapsed.style.width = "100%";
        collapsed.style.position = "static";
        collapsed.style.zIndex = 1450;
      }
    }
  }

  toggleCollapse(e) {
    e.preventDefault();
    let collapsed = document.getElementById(this.state.wrapper);
    if (this.state.isMenuOpen === true) {
      collapsed.style.display = "none";
      this.setState({ isMenuOpen: false });
    } else {
      collapsed.style.display = "block";
      collapsed.style.backgroundColor = "#fff";
      collapsed.style.top = "50px";
      collapsed.style.position = "absolute";
      collapsed.style.zIndex = 1450;
      this.setState({ isMenuOpen: true });
    }
  }
  render() {
    const classes = this.props.classes;
    return (
      <IconButton
        className={classes.buttonCollapse}
        onClick={this.toggleCollapse}
      >
        <Menu />
      </IconButton>
    );
  }
}
ButtonAppBarCollapse.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ButtonAppBarCollapse);

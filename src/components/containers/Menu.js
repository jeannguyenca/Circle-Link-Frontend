import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/MailOutline';
import Face from '@material-ui/icons/Face';
import Coupon from '@material-ui/icons/LocalOffer'
import logo from '../../media/logo_text.png';
import {BrowserRouter, Link} from 'react-router-dom'

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#4fc95a'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  responsiveImg: {
      height: 'auto',
      width: '100%',
  },
});

const groups = ["My stats", "Coupon Sys", "Collab", "Help"]
const items =[["Customers", "Coupons"],
              ["Create", "Manage"],
              ["Create", "Manage"],
              ["Support", "Feedback"]]

function PermanentDrawerLeft(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>  
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
       <img src={logo} alt="Logo" className={classes.responsiveImg}/>
        
       
        <Divider />

        {groups.map((section, index) => {
          return (
            <List>
              <p className="textDraw">{section}</p>
              <React.Fragment>
                <ListItem button key={0}>
                  <ListItemIcon><Face /></ListItemIcon>
                  <ListItemText primary={items[index][0]} />
                </ListItem>

                <ListItem button key={1}>
                  <ListItemIcon><Coupon /></ListItemIcon>
                  <ListItemText primary={items[index][1]} />
                </ListItem>
              </React.Fragment>
            </List>
          )
        })}

      </Drawer>
      
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);
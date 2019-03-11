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

function PermanentDrawerLeft(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
  
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
       {/* <div className={classes.toolbar} /> */}
       <div style={{padding: 20}}>
       <img src={logo} alt="Logo" className={classes.responsiveImg}/>
       </div>
        
       
        <Divider />
        
        <List>
            <p  className="textDraw" >
            My Statistics
            </p>
            <ListItem button key='1'>
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Customers'/>
            </ListItem>

            <ListItem button key='2'>
                <ListItemIcon><Coupon /></ListItemIcon>
                <ListItemText  primary='Coupons'/>
            </ListItem>
        </List>

        <List>
            <p  className="textDraw" >
            Coupon System
            </p>
            <ListItem button key='1'>
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Create'/>
            </ListItem>

            <ListItem button key='2'>
                <ListItemIcon><Coupon /></ListItemIcon>
                <ListItemText  primary='Manage'/>
            </ListItem>

        </List>
      

        <List>
            <p  className="textDraw" >
            Collaboration
            </p>
            <ListItem button key='1'>
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Manage'/>
            </ListItem>

            <ListItem button key='2'>
                <ListItemIcon><Coupon /></ListItemIcon>
                <ListItemText  primary='Create'/>
            </ListItem>

        </List>
        

        <List>
            <p  className="textDraw" >
            Support
            </p>
            <ListItem button key='1'>
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Support'/>
            </ListItem>

            <ListItem button key='2'>
                <ListItemIcon><Coupon /></ListItemIcon>
                <ListItemText  primary='Feedback'/>
            </ListItem>

        </List>
        
        

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);
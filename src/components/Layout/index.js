import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../media/logo_text.png';
import {
    AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, withStyles
} from '@material-ui/core';
import{
    Face, LocalOffer, Menu
} from '@material-ui/icons'
import Dashboard from './Components/Dashboard'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Customer from './Components/Customer';
import CreateCoupon from './Components/CreateCoupon';
import ViewCoupon from './Components/ViewCoupon'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,

    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,

  },
  responsiveImg: {
    height: 'auto',
    width: '100%',
},
});

class Layout extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      id: "",
      token: "",
      mobileOpen: false,
    }
  }

  componentWillMount() {
      if (sessionStorage.getItem("auth")) {
        this.getUserInfo();
      } else {
        this.setState({ isLogin: false });
      }
  }

  getUserInfo = () => {
      let data = JSON.parse(sessionStorage.getItem("auth"));
      let userInfo = {
          id: data.userId,
          token: data.token,
      }
      this.setState(userInfo);
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    console.log(this.state.mobileOpen);
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      
      <div>
        {/* <div className={classes.toolbar} /> */}
        <div style={{padding: 20}}>
            <Link to="/"><img src={logo} alt="Logo" className={classes.responsiveImg} /></Link>
        </div>

        <Divider />
        
        <List>
            <p  className="textDraw" >
            My Statistics
            </p>
            <ListItem button key='1' className="custo" component={Link} to="/Customers">
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Customers'/>
            </ListItem>

            <ListItem button key='2' component={Link} to="/Coupons">
                <ListItemIcon><LocalOffer /></ListItemIcon>
                <ListItemText  primary='Coupons'/>
            </ListItem>
        </List>

        <List>
            <p  className="textDraw" >
            Coupon System
            </p>
            <ListItem button key='3' component={Link} to="/CreateCoupon">
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Create'/>
            </ListItem>

            <ListItem button key='4' component={Link} to="/Manage">
                <ListItemIcon><LocalOffer /></ListItemIcon>
                <ListItemText  primary='Manage'/>
            </ListItem>

        </List>
      

        <List>
            <p  className="textDraw" >
            Collaboration
            </p>
            <ListItem button key='5' component={Link} to="/ManageCollab">
                <ListItemIcon><Face /></ListItemIcon>
                <ListItemText  primary='Manage'/>
            </ListItem>

            <ListItem button key='6' component={Link} to="/CreateCollab">
                <ListItemIcon><LocalOffer /></ListItemIcon>
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
                <ListItemIcon><LocalOffer /></ListItemIcon>
                <ListItemText  primary='Feedback'/>
            </ListItem>

        </List>
        
       



      </div>
      
    );

    return (
        <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            

          </Toolbar>
        </AppBar>
       


        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              onClick={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}

              
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}

              
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          
          
            <Switch>
                <Route exact path="/" render={() => <Dashboard />} />
                <Route path="/Customers" render={() => <Customer />} />
                <Route path="/CreateCoupon" render={() => <CreateCoupon />} />
                <Route path="/Manage" render={() => <ViewCoupon />} />
            </Switch>


          
     
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
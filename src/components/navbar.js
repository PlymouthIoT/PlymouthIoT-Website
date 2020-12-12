import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Container,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  appbar_button: {
    border: 0,
    color: 'white',
    height: 64,
    padding: '15px',
  }
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar position='relative'>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
  
              <Typography color="inherit" variant = "headline" variant="h6">Plymouth IoT</Typography>               
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider component={Link} to={'/'}>Home</ListItem>
               <ListItem key = {1} button divider component={Link} to={'/network'}>Network</ListItem>
               <ListItem key = {1} button divider component={Link} to={'/projects'}>Projects</ListItem>
               <ListItem key = {1} button divider component={Link} to={'/documentation'}>Documentation</ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar position='relative'>
        <Container>
        <Toolbar>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" variant="h6">Plymouth IoT</Typography>
          <Button component={Link} to={'/'} className={classes.appbar_button}>Home</Button>
          <Button component={Link} to={'/network'} className={classes.appbar_button}>Network</Button>
          <Button component={Link} to={'/projects'} className={classes.appbar_button}>Projects</Button>
          <Button component={Link} to={'/documentation'} className={classes.appbar_button}>Documentation</Button>
        </Toolbar>
        </Container>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);

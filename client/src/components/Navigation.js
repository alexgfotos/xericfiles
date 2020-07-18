import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";


function Navigation(props) {
  const { user, logoutUser } = props;

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar >
          <Button component={Link} to="/home" color="inherit">Home</Button>
          <Button component={Link} to="/explore" color="inherit">Explore</Button>
          <Button component={Link} to="/form" color="inherit">Add Plant</Button>
          

          {user.email ?
            <>
              <Button color="inherit">{user.email}</Button>
              <Button component={Link} to="/home" onClick={logoutUser} color="inherit">Logout</Button>
            </>
            :
            <>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/signup" color="inherit">Signup</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation;
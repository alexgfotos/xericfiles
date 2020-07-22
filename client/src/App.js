import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, Requirements, Forum } from "./pages";
import Auth from "./pages/Auth"
import { Navigation, Error } from "./components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from './utils/API';
import Explore from './pages/Explore/Explore';
import IndividualPlant from './pages/IndividualPlant';
import Form from './pages/Form';
import UserHome from './pages/UserHome'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Activity from "./components/PlantActivity";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FFFC99',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#BCD39C',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")
  
  useEffect(() => {
    function getCurrentUser() {
      API.Auth.user_data().then(res => {
        if (res.data) {
          setUser(res.data)
        }
      })
    }
    getCurrentUser()
  }, [])
  function loginUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  function signupUser(email, password, username, zone, city, state) {
    const data = {
      email: email,
      password: password,
      username: username,
      zone: zone,
      state: state,
      city: city
    }
    API.Auth.signup(data).then(res => {
      setUser(res.data)
    }).catch(err => {
      setError("Email already taken")
    })
  }

  function logoutUser() {
    API.Auth.logout().then(res => {
      setUser({});
    })
  }

  function clearError() {
    setError("");
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Navigation user={user} logoutUser={logoutUser} />
              </Grid>
              <Grid item xs={12}>
                {error && <Error error={error} clearError={clearError} />}
              </Grid>
              <Grid item xs={12}>
                <Switch>

                  <Route exact path={["/", "/home"]}>
                    <UserHome user={user} />
                  </Route>
                  <Route exact path={["/explore"]}>
                    <Explore />
                  </Route>
                  <Route exact path={["/individual"]}>
                    <IndividualPlant />
                  </Route>
                  <Route exact path={["/userhome"]}>
                    <UserHome />
                  </Route>
                  <Route exact path={["/activity"]}>
                    <Activity />
                  </Route>
                  <Route exact path={["/form"]}>
                    <Form />
                  </Route>
                  <Route exact path={["/login", "/signup"]}>
                    <Auth
                      user={user}
                      loginUser={loginUser}
                      signupUser={signupUser}
                    />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ?
        <Route {...props}>
          {props.children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default App;

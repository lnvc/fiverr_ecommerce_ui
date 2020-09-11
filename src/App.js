// color palette: https://coolors.co/7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb
// admin u: admin@test.com p: VtdvHe6Q
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
// import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

// import Sidebar from './Components/Sidebar';
import LoginForm from './Components/LoginForm';
// import LoginButton from './Components/LoginButton';
// import LogoutButton from './Components/LogoutButton';
import Dashboard from './Components/Dashboard';

const App = () => {
  // constructor and state: hook version
  const [role, setRole] = useState(null);
  
  const { isAuthenticated } = useAuth0();

  // componentDidMount and componentDidUpdate: hook version
  useEffect(() => {
    let url = process.env.REACT_APP_API_URL;
    axios.get(url + '/users/5f5b6cef47959741324bcec4').then(res => {
      setRole(res.data.role);
    });
  });

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/admin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  // componentDidMount(){
  //   let url = process.env.REACT_APP_API_URL;
  //   axios.get(url + '/users').then(res => {
  //     console.log(res.data[0]);
  //   });
  // }

  // render() {
    let signupForm = null;
    let dashboard = null;
    if(!isAuthenticated){
      signupForm = (
        <nav>
          <ul>
            <li>
              <Link to="/admin">Admin Login</Link>
            </li>
            <li>
              <Link to="/agency">Agency Login</Link>
            </li>
            <li>
              <Link to="/client">Client Login</Link>
            </li>
          </ul>
        </nav>
      );
    }
    else {
      dashboard = <Dashboard />;
    }
    return(
      <Router>
        <div>
          {signupForm}
          {dashboard}
          <Switch>
            <Route path="/admin">
              <LoginForm role={1} />
            </Route>
            <Route path="/agency">
              <LoginForm role={2} />
            </Route>
            <Route path="/client">
              <LoginForm role={3} />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  // }
}

export default App;
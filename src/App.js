import './App.css';
import ProfilePage from './Containers/ProfilePage/ProfilePage';
import {BrowserRouter as Router,Route , Switch} from "react-router-dom";
import LoginPage from './Containers/LoginPage/LoginPage';
import { useState } from 'react';
import HomePage from './Containers/HomePage/HomePage';
import SignUpPage from './Containers/SignUpPage/SignUpPage';
  
    
    function App() {
const[loggedIn , setLoggedIn]=useState(true)


      return (
        
        <Router>
          <Switch>
            <Route exact path="/">             
              <HomePage/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/profile">             
              <ProfilePage/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/sign-up">
              <SignUpPage/>
            </Route>
          </Switch>
        </Router>
      );
    }
    
  
  
export default App;

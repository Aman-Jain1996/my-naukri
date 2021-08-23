import './App.css'
import HomePage from '../src/components/HomePage.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/signUp.js'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import HomeScreen from './components/HomeScreen'
import PostJob from './components/postJob'

export const baseUrl = "https://jobs-api.squareboat.info/api/v1/";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="homepageUpperDiv">
      <NavBar/>
      <Switch>
          <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/login' >
              <Login />
            </Route>
            <Route path='/signUp'>
              <SignUp />
            </Route>
            <Route path='/forgotPassword'>
              <ForgotPassword />
            </Route>
            <Route path='/resetPassword'>
              <ResetPassword />
            </Route>
            <Route path='/homescreen'>
              <HomeScreen />
            </Route>
            <Route path='/postJob'>
              <PostJob />
            </Route>
          </Switch>
      </div>
    </div>
    
    </Router>
  );
}

export default App;

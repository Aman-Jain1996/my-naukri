import './App.css'
import HomePage from '../src/components/HomePage.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/signUp.js'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'

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
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

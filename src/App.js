import './App.css'
import HomePage from '../src/components/HomePage.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="homepageUpperDiv">
      <NavBar comp="Home"/>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;

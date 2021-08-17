import './App.css'
import HomePage from '../src/components/HomePage.js'
import Login from './components/Login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="homepageUpperDiv">
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Signup from './components/SignupPage'
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/signup" component={Signup}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Signup from './components/SignupPage'
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={LoginPage}/>
        </Switch>

      </div>
    </Router>
    </AuthProvider>
    
  );
}

export default App;

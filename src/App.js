import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin"><SignIn /></Route>
        <Route path="/users"><Users /></Route>
      </Switch>
    </Router>
  );
}

export default App;

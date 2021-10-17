import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage';
import Navbar from './Components/Home/Navbar/Navbar';
import Recruiters from './Components/Recruiters/Recruiters';
import SignUpStart from './Components/SignUp/SignUpStart/SignUpStart';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/recruiters">
          <Recruiters />
        </Route>
        <Route path="/signup">
          <SignUpStart />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

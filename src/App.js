import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage/HomePage';
import Navbar from './Components/Home/Navbar/Navbar';
import Recruiters from './Components/Recruiters/Recruiters';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/recruiters">
          <Recruiters />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

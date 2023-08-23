import logo from './logo.svg';
import './App.css';
import Home from './screen/SignIn';
import About from './screen/About';
import Dashboard from './screen/Dashboard';
import {
  BrowserRouter
  , Routes,
  // Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
      </nav>
      </div>
  );
}

export default App;

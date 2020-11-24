import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { Home, PageNotfound } from './pages';

import { Clock } from './components';

import './App.css';
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute path="/" component={PageNotfound} />
      </Switch>
      <div className="app">
        <Clock />
      </div>
    </Router>
  );
}

export default App;

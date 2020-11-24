import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { Home, PageNotfound } from './pages';
import PublicRoute from "./routes/PublicRoute";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/" component={PageNotfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

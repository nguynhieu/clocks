import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { TimeProvider } from './contexts/TimeContext';

import { Home, PageNotfound } from './pages';
import { PublicRoute } from "./routes";

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <TimeProvider>
      <Router>
        <div className="app">
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute path="/" component={PageNotfound} />
          </Switch>
        </div>
      </Router>
    </TimeProvider>
  );
}

export default App;
